import React from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import styles from './App.module.css';
import Music from '../Music/Music'
import headphones from './headphones.svg';
import logoLight from './logoLight.svg';

const PATH_HOME = '/';
const PATH_MUSIC = '/music';

const musicComponent = () => <Music />

const renderNavBar = () => {
  return (
    <div className={styles.navBar}>
      <Link to={PATH_HOME} className={styles.iconContainer}>
        <img src={logoLight} className={styles.icon} alt="Home" />
      </Link>
      <Link to={PATH_MUSIC} className={styles.iconContainer}>
        <img src={headphones} className={styles.icon} alt="Music" />
      </Link>
    </div>
  );
}

const App = () => {
  return (
    <HashRouter basename={PATH_HOME}>
      <div className={styles.container}>
        {renderNavBar()}
        <Route path={PATH_HOME} exact component={musicComponent} />
        <Route path={PATH_MUSIC} component={musicComponent} />
      </div>
    </HashRouter>
  );
}

export default App;
