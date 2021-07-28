import Head from 'next/head';

import styles from '../styles/home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Início - ig.news</title>
      </Head>
      <h1 className={styles.title}>
        Hello ig.news!
      </h1>
    </>
  )
}
