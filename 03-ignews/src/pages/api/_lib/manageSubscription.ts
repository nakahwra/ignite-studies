import { query as q } from 'faunadb';
import { fauna } from "../../../services/fauna";
import { stripe } from '../../../services/stripe';

export async function saveSubscription(
  subscriptionId: string,
  customerId: string,
  createAction = false, //* Serve para controlar o fluxo entre criação e atualização de assinatura
) {

  const userRef = await fauna.query(
    // Buscando campo 'ref' no índice tal que seja igual ao customerId
    q.Select(
      'ref',
      q.Get(
        q.Match(
          q.Index('user_by_stripe_customer_id'),
          customerId,
        )
      )
    )
  );

  const subscription = await stripe.subscriptions.retrieve(subscriptionId);

  // Selecionando dados
  const subscriptionData = {
    id: subscription.id,
    userId: userRef,
    status: subscription.status,
    price_id: subscription.items.data[0].price.id,
  }
  
  if (createAction) {
    // Criação de uma nova assinatura
    await fauna.query(
      q.Create(
        q.Collection('subscriptions'),
        { data: subscriptionData }
      )
    );
  } else {
    // Atualização de assinatura existente (cancelamento e deleção)
    await fauna.query(
      q.Replace(
        q.Select(
          "ref",
          q.Get(
            q.Match(
              q.Index('subscription_by_id'),
              subscriptionId
            )
          )
        ),
        { data: subscriptionData }
      )
    )
  }
}