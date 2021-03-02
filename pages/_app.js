import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import 'styles/_global.scss';
import styles from 'styles/_app.module.scss';
import Food from 'svgComponents/Food';
import CrosswordIcon from 'svgComponents/CrosswordIcon';
import Headphones from 'svgComponents/Headphones';

const NAV_ICONS = [
  { Component: Headphones, path: '/music' },
  { Component: Food, path: '/recipes' },
  { Component: CrosswordIcon, path: '/crossword' }
];

const App = ({ Component, pageProps }) => {
  const renderNavBar = () => {
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
      <div className={styles.navBar}>
        <Link href={'/'}>
          <a className={styles.logoContainer} />
        </Link>
        <div className={styles.iconContainer}>{renderedIcons}</div>
      </div>
    );
  };

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
      {renderNavBar()}
      <div className={styles.pageContainer}>
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default App;
