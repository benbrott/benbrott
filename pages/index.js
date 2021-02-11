import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from 'styles/index.module.scss';
import withFormFactor from 'utils/withFormFactor';
import GitHub from 'svgComponents/GitHub';
import LinkedIn from 'svgComponents/LinkedIn';
import Twitter from 'svgComponents/Twitter';
import LogoNameLight from 'svgComponents/LogoNameLight';
import LogoNameFlatLight from 'svgComponents/LogoNameFlatLight';

const TEXT_MAPS = [
  { label: 'WHO', info: 'Ben Brott, software engineer at Appian' },
  { label: 'WHAT', info: 'A site inspired by talks at An Event Apart DC' },
  { label: 'WHY', info: 'To learn CSS, explore SVG, and design eye-catching, responsive UIs' },
  { label: 'HOW', info: 'React, Sass, Next.js, Netlify' }
];

const SOCIAL_LINKS = [
  { Component: Twitter, href: 'https://twitter.com/BenBrott' },
  { Component: GitHub, href: 'https://github.com/BenBrott' },
  { Component: LinkedIn, href: 'https://www.linkedin.com/in/brott/' }
];

const About = ({ isMobile }) => {
  const getBannerImage = () => {
    const image = isMobile ? <LogoNameLight /> : <LogoNameFlatLight />;
    return <div className={styles.banner}>{image}</div>;
  };

  const renderTextGrid = () => {
    const textItems = TEXT_MAPS.map(({ label, info }, index) => {
      const labelStyles = classNames([styles.label, styles[`label${index}`]]);
      const infoStyles = classNames([styles.info, styles[`info${index}`]]);
      return [
        <h4 key={`${label}_label`} className={labelStyles}>
          {label}
        </h4>,
        <span key={`${label}_info`} className={infoStyles}>
          {info}
        </span>
      ];
    });
    return (
      <div key={'content'} className={styles.grid}>
        {textItems}
      </div>
    );
  };

  const renderLinkItems = () => {
    return SOCIAL_LINKS.map(({ Component, href }, index) => {
      const key = `social_link_${index}`;
      return (
        <a key={key} className={styles.socialLink} href={href} target="_blank" rel="noopener noreferrer">
          <Component />
        </a>
      );
    });
  };

  const renderSocialLinks = () => {
    return <div className={styles.socialLinksContainer}>{renderLinkItems()}</div>;
  };

  return (
    <div className={styles.container}>
      {getBannerImage()}
      {renderTextGrid()}
      {renderSocialLinks()}
    </div>
  );
};

About.propTypes = { isMobile: PropTypes.bool };
About.defaultProps = { isMobile: false };

export default withFormFactor(About);
