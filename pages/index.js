import React from 'react';
import Image from 'next/image';
import styles from 'styles/index.module.scss';
import GitHub from 'svgComponents/GitHub';
import LinkedIn from 'svgComponents/LinkedIn';
import Twitter from 'svgComponents/Twitter';
import CodePen from 'svgComponents/CodePen';

const SOCIAL_LINKS = [
  { Component: GitHub, href: 'https://github.com/BenBrott' },
  { Component: CodePen, href: 'https://codepen.io/benbrott' },
  { Component: LinkedIn, href: 'https://www.linkedin.com/in/brott/' },
  { Component: Twitter, href: 'https://twitter.com/BenBrott' }
];

const About = () => {
  const renderSocialLinks = () => {
    const links = SOCIAL_LINKS.map(({ Component, href }, index) => {
      const key = `social_link_${index}`;
      return (
        <a key={key} href={href} target="_blank" rel="noopener noreferrer">
          <Component />
        </a>
      );
    });
    return <div className={styles.linksContainer}>{links}</div>;
  };

  return (
    <div className={styles.container}>
      <div className={styles.textSection}>
        <div className={styles.blurbRight}>
          <h1>Ben Brott</h1>
          <p>
            I'm currently a front-end developer at Appian in the Washington D.C. area. Before that, I graduated from
            Virginia Tech in 2018 with degrees in computer science and math. My interests include cooking, crocheting,
            camping, video games, music, and sports.
          </p>
        </div>
        <div className={styles.blurbLeft}>
          <h1>benbrott.com</h1>
          <p>
            I was inspired to create this site after attending An Event Apart DC. The site is my sandbox to improve my
            skills with modern interface and traditional front-end technologies, such as CSS and SVG. I use React,
            Next.js, Sass, and Netlify in my tech stack.
          </p>
        </div>
      </div>
      <div className={styles.photoSection}>
        <div className={styles.imageContainer}>
          <Image className={styles.image} src="/me.jpg" alt="Picture of Ben" layout="fill" />
        </div>
        {renderSocialLinks()}
      </div>
    </div>
  );
};

export default React.memo(About);
