import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import 'styles/_global.scss';
import styles from 'styles/_app.module.scss';
import Food from 'svgComponents/Food';
import CrosswordIcon from 'svgComponents/CrosswordIcon';
import Headphones from 'svgComponents/Headphones';
import House from 'svgComponents/House';
import Loading from 'svgComponents/Loading';

const NAV_ICONS = [
  { Component: House, path: '/' },
  { Component: Headphones, path: '/music' },
  { Component: Food, path: '/recipes' },
  { Component: CrosswordIcon, path: '/crossword' },
  { Component: Loading, path: '/loadingAnimations' }
];

const App = ({ Component, pageProps }) => {
  const router = useRouter();

  const renderNavBar = () => {
    const renderedIcons = NAV_ICONS.map(({ Component, path }, index) => {
      const currentIcon = path === router.pathname;
      const classes = classNames([styles.iconContainer, currentIcon && styles.currentIcon]);
      const key = `navIcon_${index}`;
      return (
        <Link href={path} key={key}>
          <a className={classes}>
            <Component primaryColor={currentIcon ? '#000' : '#eee'} />
          </a>
        </Link>
      );
    });
    return <div className={styles.navBar}>{renderedIcons}</div>;
  };

  return (
    <>
      <Head>
        <title>benbrott.com</title>
        <meta name="description" content="Ben Brott's React sandbox!"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charset="utf-8" />
        <meta name="theme-color" content="#333" />
        <link rel="canonical" href="https://benbrott.com/" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <div className={styles.container}>
        {renderNavBar()}
        <div className={styles.pageContainer}>
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
};

export default App;
