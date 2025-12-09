import { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import Link from 'next/link';
import Food from '@/components/pageIcons/Food';
import CrosswordPuzzle from '@/components/pageIcons/CrosswordPuzzle';
import Headphones from '@/components/pageIcons/Headphones';
import styles from '@/styles/_app.module.scss';
import '@/styles/_global.scss';

export const metadata: Metadata = {
  title: 'benbrott.com',
  description: "Ben Brott's React sandbox!"
};

export const viewport: Viewport = {
  themeColor: '#333'
};

const navIcons = [
  { Component: Headphones, path: '/music' },
  { Component: Food, path: '/recipes' },
  { Component: CrosswordPuzzle, path: '/crossword' }
];

const Layout = ({ children }: { children: ReactNode }) => {
  const renderedIcons = navIcons.map(({ Component, path }, index) => {
    const key = `navIcon_${index}`;
    return (
      <Link className={styles.icon} href={path} key={key}>
        <Component primaryColor={'#eee'} />
      </Link>
    );
  });

  return (
    <html lang="en">
      <body>
        <div className={styles.navBar}>
          <Link className={styles.logoContainer} href={'/'}>
            Link to the home page
          </Link>
          <div className={styles.iconContainer}>{renderedIcons}</div>
        </div>
        <main className={styles.pageContainer}>{children}</main>
      </body>
    </html>
  );
};

export default Layout;
