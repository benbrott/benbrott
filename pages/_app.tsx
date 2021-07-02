import React, { useRef } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';
import 'styles/_global.scss';
import styles from 'styles/_app.module.scss';
import Food from 'components/pageIcons/food';
import CrosswordPuzzle from 'components/pageIcons/crosswordPuzzle';
import Headphones from 'components/pageIcons/headphones';

const NAV_ICONS = [
  { Component: Headphones, path: '/music' },
  { Component: Food, path: '/recipes' },
  { Component: CrosswordPuzzle, path: '/crossword' }
];

const App = ({ Component, pageProps }: AppProps) => {
  const pageContainer = useRef<HTMLDivElement>(null);

  Router.events.on('routeChangeComplete', () => {
    if (pageContainer && pageContainer.current) {
      pageContainer.current.scrollTo(0, 0);
    }
  });

  const renderedIcons = NAV_ICONS.map(({ Component, path }, index) => {
    const key = `navIcon_${index}`;
    return (
      <Link href={path} key={key}>
        <a className={styles.icon}>
          <Component primaryColor={'#eee'} />
        </a>
      </Link>
    );
  });

  return (
    <>
      <Head>
        <title>benbrott.com</title>
        <meta name="description" content="Ben Brott's React sandbox!"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#333" />
        <link rel="canonical" href="https://benbrott.com/" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <div className={styles.navBar}>
        <Link href={'/'}>
          <a className={styles.logoContainer}>Link to the home page</a>
        </Link>
        <div className={styles.iconContainer}>{renderedIcons}</div>
      </div>
      <div className={styles.pageContainer} ref={pageContainer}>
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default App;
