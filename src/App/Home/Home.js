import React from 'react';
import classNames from 'classnames';
import styles from './Home.module.css';
import logoNameFlatLight from './logoNameFlatLight.svg';

class Home extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <img src={logoNameFlatLight} className={styles.banner} alt="" />
      </div>
    );
  }
}

export default Home;