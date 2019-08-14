import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter, Route, Link } from "react-router-dom";
import styles from './App.module.css';
import Home from './Home/Home'
import Music from './Music/Music'
import headphones from './headphones.svg';
import logoLight from './logoLight.svg';

const PATH_HOME = '/';
const PATH_MUSIC = '/music';

const NAV_ICONS = [
  {
    path: PATH_HOME,
    icon: logoLight,
    alt: 'home'
  },
  {
    path: PATH_MUSIC,
    icon: headphones,
    alt: 'music'
  }
];

class App extends React.Component {
  onNavIconClick = (alt) => {
    ReactDom.findDOMNode(this.refs[alt]).blur();
  }

  renderNavIcons = () => {
    return NAV_ICONS.map(({path, icon, alt}, index) => {
      return (
        <Link
          to={path}
          className={styles.iconContainer}
          onClick={() => this.onNavIconClick(alt)}
          ref={alt}
          key={`navIcon_${index}`}
        >
          <img src={icon} className={styles.icon} alt={alt} />
        </Link>
      );
    });
  }

  renderNavBar = () => {
    return (
      <div className={styles.navBar}>
        {this.renderNavIcons()}
      </div>
    );
  }

  homeComponent = () => <Home />
  musicComponent = () => <Music />

  render() {
    return (
      <HashRouter basename={PATH_HOME}>
        <div className={styles.container}>
          {this.renderNavBar()}
          <Route path={PATH_HOME} exact component={this.homeComponent} />
          <Route path={PATH_MUSIC} component={this.musicComponent} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
