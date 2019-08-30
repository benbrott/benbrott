import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Home.module.css';

class Home extends React.PureComponent {
  static propTypes = { isDark: PropTypes.bool }
  static defaultProps = { isDark: false }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.layer1}/>
        <div className={styles.layer2}/>
        <div className={styles.layer3}/>
        <div className={styles.layer4}/>
        <div className={styles.layer5}/>
      </div>
    );
  }
}

export default Home;