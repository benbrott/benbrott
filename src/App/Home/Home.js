import React from 'react';
import PropTypes from 'prop-types';
import styles from './Home.module.scss';

class Home extends React.PureComponent {
  static propTypes = { isDark: PropTypes.bool }
  static defaultProps = { isDark: false }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.bottomLayer1}/>
        <div className={styles.bottomLayer2}/>
        <div className={styles.midLayer1}/>
        <div className={styles.midLayer2}/>
        <div className={styles.topLayer}/>
      </div>
    );
  }
}

export default Home;