import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter, Route, Link } from "react-router-dom";
import classNames from 'classnames';
import styles from './App.module.css';
import Home from './Home/Home'
import Music from './Music/Music'
import About from './About/About'
import headphonesLight from './assets/headphonesLight.svg';
import headphonesDark from './assets/headphonesDark.svg';
import homeLight from './assets/homeLight.svg';
import homeDark from './assets/homeDark.svg';
import legoLight from './assets/legoLight.svg';
import legoDark from './assets/legoDark.svg';
import sunLight from './assets/sunLight.svg';
import moonDark from './assets/moonDark.svg';
import { KEYS } from '../utils/events';

const PATH_HOME = '/';
const PATH_MUSIC = '/music';
const PATH_ABOUT = '/about';

const REFS = {
  HOME: 'home',
  MUSIC: 'music',
  ABOUT: 'about',
  THEME: 'theme'
};

const THEME = 'THEME';
const LIGHT = 'LIGHT';
const DARK = 'DARK';
const LIGHT_BACKGROUND = '#bbb';
const DARK_BACKGROUND = '#333';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isDark: localStorage.getItem(THEME) === DARK,
      currentPage: undefined
    };
  }

  componentDidMount() {
    document.body.style.backgroundColor = this.state.isDark ? DARK_BACKGROUND : LIGHT_BACKGROUND;
    this.setState({ currentPage: this.initialPage })
  }

  componentWillUnmount() {
    document.body.style.backgroundColor = null;
  }

  blurIcon = ref => {
    ReactDom.findDOMNode(this.refs[ref]).blur();
  }

  onNavIconClick = ref => {
    this.blurIcon(ref);
    this.setState({ currentPage: ref });
  }

  getThemedNavIcon = (icons, isDark, currentIcon) => {
    if (isDark) {
      return currentIcon ? icons.dark : icons.light;
    }
    return currentIcon ? icons.light : icons.dark;
  }

  renderNavIcons = () => {
    const { isDark, currentPage } = this.state;
    const containerClasses = [styles.iconContainer, isDark && styles.dark];
    return [
      {
        path: PATH_HOME,
        icons: { light: homeLight, dark: homeDark },
        alt: REFS.HOME
      },
      {
        path: PATH_MUSIC,
        icons: { light: headphonesLight, dark: headphonesDark },
        alt: REFS.MUSIC
      },
      {
        path: PATH_ABOUT,
        icons: { light: legoLight, dark: legoDark },
        alt: REFS.ABOUT
      }
    ].map(({path, icons, alt}, index) => {
      const ref = alt;
      const currentIcon = ref === currentPage;
      const classes = classNames([
        ...containerClasses,
        currentIcon && styles.currentIcon
      ]);
      const icon = this.getThemedNavIcon(icons, isDark, currentIcon);
      const onClick = () => this.onNavIconClick(ref);
      const key = `navIcon_${index}`;
      return (
        <Link to={path} className={classes} onClick={onClick} ref={ref} key={key}>
          <img src={icon} className={styles.icon} alt={alt} />
        </Link>
      );
    });
  }

  toggleTheme = () => {
    this.blurIcon(REFS.THEME);
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

  renderThemeIcon = () => {
    const isDark = this.state.isDark;
    const containerClasses = classNames([styles.iconContainer, isDark && styles.dark]);
    const src = isDark ? sunLight : moonDark;
    return (
      <div
        className={containerClasses}
        onClick={this.toggleTheme}
        onKeyPress={this.onThemeIconKeyPress}
        tabIndex={0}
        ref={REFS.THEME}
      >
        <img src={src} className={styles.icon} alt={'theme toggle'} />
      </div>
    );
  }

  renderNavBar = () => {
    const containerClasses = classNames([styles.navBar, this.state.isDark && styles.dark]);
    return (
      <div className={containerClasses}>
        <div className={styles.iconGroup}>
          {this.renderNavIcons()}
        </div>
        <div className={styles.iconGroup}>
          {this.renderThemeIcon()}
        </div>
      </div>
    );
  }

  homeComponent = () => {
    this.initialPage = REFS.HOME;
    return (<Home isDark={this.state.isDark}/>);
  };

  musicComponent = () => {
    this.initialPage = REFS.MUSIC;
    return (<Music isDark={this.state.isDark}/>);
  };

  aboutComponent = () => {
    this.initialPage = REFS.ABOUT;
    return (<About isDark={this.state.isDark}/>);
  };

  render() {
    return (
      <HashRouter basename={PATH_HOME}>
        <div className={styles.container}>
          {this.renderNavBar()}
          <Route path={PATH_HOME} exact component={this.homeComponent} />
          <Route path={PATH_MUSIC} component={this.musicComponent} />
          <Route path={PATH_ABOUT} component={this.aboutComponent} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
