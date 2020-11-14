import Head from 'next/head';
import Footer from '../container/Footer';
import Header from '../container/Header';
import Main from '../container/Main';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Home Decor</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />

      <Main />

      <Footer />
    </div>
  );
}
