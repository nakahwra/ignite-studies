import { NextApiRequest, NextApiResponse } from "next";
import { Readable } from "stream";

import Stripe from "stripe";
import { stripe } from "../../services/stripe";
import { saveSubscription } from "./_lib/manageSubscription";

// Função buffer para ler a stream de eventos do stripe
async function buffer(readable: Readable) {
  const chunks = [];

  for await (const chunk of readable) {
    chunks.push(
      typeof chunk === 'string' ? Buffer.from(chunk) : chunk
    );
  }

  return Buffer.concat(chunks);
}

// Desabilitar parser de requisições padrão do next para consumir streams
export const config = {
  api: {
    bodyParser: false,
  }
}

// Lista de eventos que serão processados
const relevantEvents = new Set([
  'checkout.session.completed',
  'customer.subscription.updated',
  'customer.subscription.deleted',
]);

// Tratamento dos eventos recebidos
export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const buf = await buffer(req);
    const secret = req.headers['stripe-signature'];

    let event: Stripe.Event;

    // Autenticação da requisição
    try {
      event = stripe.webhooks.constructEvent(buf, secret, process.env.STRIPE_WEBHOOK_SECRET);
    } catch (err) {
      return res.status(400).send(`Webhook error: ${err.message}`);
    }

    const { type } = event;

    // Tratativa para cada evento relevante
    if (relevantEvents.has(type)) {
      try {
        switch (type) {
          case 'customer.subscription.updated':
          case 'customer.subscription.deleted':

            // Tipagem
            const subscription = event.data.object as Stripe.Subscription;

            await saveSubscription(
              subscription.id,
              subscription.customer.toString(),
            );

            break;
          case 'checkout.session.completed':

            // Tipagem
            const checkoutSession = event.data.object as Stripe.Checkout.Session;

            await saveSubscription(
              checkoutSession.subscription.toString(),
              checkoutSession.customer.toString(),
              true
            )

            break;
          default:
            throw new Error('Unhandles event.')
        }
      } catch (err) {

      }
    }

    res.json({ received: true });
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method not allowed');
  }
}