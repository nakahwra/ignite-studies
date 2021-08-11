import Head from 'next/head';
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