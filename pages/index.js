import Head from 'next/head';

import Header from '../container/Header';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home Decor</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />

      <main>
        <h2>Main Section</h2>
      </main>

      <footer>
        <h2>Footer Section</h2>
      </footer>
    </div>
  );
}
