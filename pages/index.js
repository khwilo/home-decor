import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home Decor</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header>
        <h1>Header section</h1>
      </header>

      <main>
        <h2>Main Section</h2>
      </main>

      <footer>
        <h2>Footer Section</h2>
      </footer>
    </div>
  );
}
