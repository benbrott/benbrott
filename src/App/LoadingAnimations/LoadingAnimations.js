import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './LoadingAnimations.module.scss';
import hourglassDark from 'assets/hourglassDark.svg';
import hourglassLight from 'assets/hourglassLight.svg';

const LOADING_ANIMATIONS = [
  {
    themes: { light: hourglassLight, dark: hourglassDark },
    alt: 'hourglass'
  }
];

class LoadingAnimations extends React.PureComponent {
  static propTypes = { isDark: PropTypes.bool }
  static defaultProps = { isDark: false }

  renderLoadingAnimations = () => {
    const isDark = this.props.isDark;
    const containerClasses = classNames([
      styles.container,
      isDark ? styles.dark : styles.light
    ]);
    return LOADING_ANIMATIONS.map(({ themes, alt }) => {
      const src = isDark ? themes.dark : themes.light;
      return (
        <div className={containerClasses}>
          <img src={src} className={styles.animation} alt={alt} />
        </div>
      );
    });
  }

  render() {
    return (
      <div className={styles.grid}>
        {this.renderLoadingAnimations()}
      </div>
    );
  }
}

export default LoadingAnimations;