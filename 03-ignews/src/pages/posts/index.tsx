import { GetStaticProps } from 'next';
import Head from 'next/head';

import Prismic from '@prismicio/client';
import { getPrismiscClient } from '../../services/prismic';
import { RichText } from 'prismic-dom';

import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts - Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="">
            <time>12 de março de 2021</time>
            <strong>Título do Post: de fato, é o título.</strong>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              In quis mi in orci tempus pulvinar.
              Vestibulum ante ipsum primis in faucibus orci luctus et 
              ultrices posuere cubilia curae
            </p>
          </a>
          <a href="">
            <time>12 de março de 2021</time>
            <strong>Título do Post: de fato, é o título.</strong>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              In quis mi in orci tempus pulvinar.
              Vestibulum ante ipsum primis in faucibus orci luctus et 
              ultrices posuere cubilia curae
            </p>
          </a>
          <a href="">
            <time>12 de março de 2021</time>
            <strong>Título do Post: de fato, é o título.</strong>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              In quis mi in orci tempus pulvinar.
              Vestibulum ante ipsum primis in faucibus orci luctus et 
              ultrices posuere cubilia curae
            </p>
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismiscClient();

  const response = await prismic.query([
    Prismic.Predicates.at('document.type', 'post')
  ], {
    fetch: ['post.title', 'post.content'],
    pageSize: 100,
  });

  const posts = response.results.map(post => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      excerpt: post.data.content.find(content => content.type === 'paragraph')?.text ?? '',
      updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      })
    };
  })

  return {
    props: {
      posts,
    }
  }
}