import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter, Route, Link } from "react-router-dom";
import classNames from 'classnames';
import styles from './App.module.css';
import Home from './Home/Home'
import Music from './Music/Music'
import headphonesLight from './assets/headphonesLight.svg';
import headphonesDark from './assets/headphonesDark.svg';
import logoLight from './assets/logoLight.svg';
import logoDark from './assets/logoDark.svg';
import sunLight from './assets/sunLight.svg';
import moonDark from './assets/moonDark.svg';
import { KEYS } from '../utils/events';

const PATH_HOME = '/';
const PATH_MUSIC = '/music';

const THEME = 'THEME';
const LIGHT = 'LIGHT';
const DARK = 'DARK';
const LIGHT_BACKGROUND = '#bbb';
const DARK_BACKGROUND = '#333';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isDark: localStorage.getItem(THEME) === DARK };
  }

  componentDidMount() {
    document.body.style.backgroundColor = this.state.isDark ? DARK_BACKGROUND : LIGHT_BACKGROUND;
  }

  componentWillUnmount() {
    document.body.style.backgroundColor = null;
  }

  onIconClick = ref => {
    ReactDom.findDOMNode(this.refs[ref]).blur();
  }

  renderNavIcons = isDark => {
    const containerClasses = classNames([styles.iconContainer, isDark && styles.dark]);
    return [
      {
        path: PATH_HOME,
        icon: isDark ? logoLight : logoDark,
        alt: 'home'
      },
      {
        path: PATH_MUSIC,
        icon: isDark ? headphonesLight : headphonesDark,
        alt: 'music'
      }
    ].map(({path, icon, alt}, index) => {
      const ref = alt;
      const onClick = () => this.onIconClick(ref);
      const key = `navIcon_${index}`;
      return (
        <Link to={path} className={containerClasses} onClick={onClick} ref={ref} key={key}>
          <img src={icon} className={styles.icon} alt={alt} />
        </Link>
      );
    });
  }

  toggleTheme = () => {
    this.onIconClick('theme');
    const toggleDark = !this.state.isDark;
    localStorage.setItem(THEME, toggleDark ? DARK : LIGHT);
    document.body.style.backgroundColor = toggleDark ? DARK_BACKGROUND : LIGHT_BACKGROUND;
    this.setState({ isDark: toggleDark });
  }

  onThemeIconKeyPress = event => {
    if (event.key === KEYS.ENTER) {
      this.toggleTheme();
    }
  }

  renderThemeIcon = isDark => {
    const containerClasses = classNames([styles.iconContainer, isDark && styles.dark]);
    const src = isDark ? sunLight : moonDark;
    const alt = isDark ? 'sun' : 'moon';
    return (
      <div
        className={containerClasses}
        onClick={this.toggleTheme}
        onKeyPress={this.onThemeIconKeyPress}
        tabIndex={0}
        ref={'theme'}
      >
        <img src={src} className={styles.icon} alt={alt} />
      </div>
    );
  }

  renderNavBar = () => {
    const isDark = this.state.isDark;
    const containerClasses = classNames([styles.navBar, isDark && styles.dark]);
    return (
      <div className={containerClasses}>
        {this.renderNavIcons(isDark)}
        {this.renderThemeIcon(isDark)}
      </div>
    );
  }

  homeComponent = () => <Home isDark={this.state.isDark}/>
  musicComponent = () => <Music isDark={this.state.isDark}/>

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
