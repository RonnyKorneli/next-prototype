import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <main role="main" id="main" className="mt-6 !h-auto ">
      <section className="container-narrow">
        <div className={styles.container}>
          <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main className={styles.main}>
            <h1 className={styles.title}>
              Welcome to <a href="https://nextjs.org">Next.js!</a>
            </h1>

            <p className={styles.description}>
              Get started by editing{' '}
              <code className={styles.code}>pages/index.tsx</code>
            </p>

            <div className={styles.grid}>
              <Link
                href={'/produkte/Apple-iPhone-13-ohne-Vertrag/8155003'}
                className={styles.card}
              >
                <h2>Team PDP &rarr;</h2>
                <ul>
                  <li>Linda Formumm</li>
                  <li>Olayinka Olaoluwa Oginni</li>
                  <li>Ronny Korneli</li>
                </ul>
              </Link>

              <Link href="/suche" className={styles.card}>
                <h2>Team SEM &rarr;</h2>
                <ul>
                  <li>Emanuel Thieme</li>
                  <li>Michael Plank</li>
                </ul>
              </Link>
            </div>
          </main>
        </div>
      </section>
    </main>
  );
}
