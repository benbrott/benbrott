import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './LoadingAnimations.module.scss';
import Hourglass from 'svgComponents/Hourglass';
import Maze from 'svgComponents/Maze';

class LoadingAnimations extends React.PureComponent {
  static propTypes = { isDark: PropTypes.bool }
  static defaultProps = { isDark: false }

  renderLoadingAnimations = () => {
    const isDark = this.props.isDark;
    const containerClasses = classNames([
      styles.container,
      isDark ? styles.dark : styles.light
    ]);
    return [Hourglass, Maze].map(Component => {
      return (
        <div className={containerClasses}>
          <Component isDark={isDark} />
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