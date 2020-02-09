import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter, Route, Link } from "react-router-dom";
import classNames from 'classnames';
import styles from './App.module.scss';
import Home from './Home/Home'
import Music from './Music/Music'
import About from './About/About'
import headphonesLight from 'assets/headphonesLight.svg';
import headphonesDark from 'assets/headphonesDark.svg';
import homeLight from 'assets/homeLight.svg';
import homeDark from 'assets/homeDark.svg';
import hourglassLight from 'assets/hourglassLight.svg';
import hourglassDark from 'assets/hourglassDark.svg';
import legoLight from 'assets/legoLight.svg';
import legoDark from 'assets/legoDark.svg';
import sunLight from 'assets/sunLight.svg';
import moonDark from 'assets/moonDark.svg';
import { KEYS } from 'utils/events';
import LoadingAnimations from './LoadingAnimations/LoadingAnimations';

const PATH_HOME = '/';
const PATH_MUSIC = '/music';
const PATH_LOADING_ANIMATIONS = '/loadingAnimations';
const PATH_ABOUT = '/about';

const REFS = {
  HOME: 'home',
  MUSIC: 'music',
  LOADING_ANIMATIONS: 'loading animations',
  ABOUT: 'about',
  THEME: 'theme'
};

const NAV_ICONS = [
  {
    path: PATH_HOME,
    themes: { light: homeLight, dark: homeDark },
    alt: REFS.HOME
  },
  {
    path: PATH_MUSIC,
    themes: { light: headphonesLight, dark: headphonesDark },
    alt: REFS.MUSIC
  },
  {
    path: PATH_LOADING_ANIMATIONS,
    themes: { light: hourglassLight, dark: hourglassDark },
    alt: REFS.LOADING_ANIMATIONS
  },
  {
    path: PATH_ABOUT,
    themes: { light: legoLight, dark: legoDark },
    alt: REFS.ABOUT
  }
];

const THEME = 'THEME';
const LIGHT = 'LIGHT';
const DARK = 'DARK';
const LIGHT_BACKGROUND = '#138270';
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

  getThemedNavIconSrc = (themes, isDark, currentIcon) => {
    if (isDark) {
      return currentIcon ? themes.dark : themes.light;
    }
    return currentIcon ? themes.light : themes.dark;
  }

  getIconContainerClasses = isDark => {
    return [
      styles.iconContainer,
      isDark ? styles.dark : styles.light
    ];
  }

  renderNavIcons = () => {
    const { isDark, currentPage } = this.state;
    return NAV_ICONS.map(({path, themes, alt}, index) => {
      const ref = alt;
      const currentIcon = ref === currentPage;
      const classes = classNames([
        ...this.getIconContainerClasses(isDark),
        currentIcon && styles.currentIcon
      ]);
      const src = this.getThemedNavIconSrc(themes, isDark, currentIcon);
      const onClick = () => this.onNavIconClick(ref);
      const key = `navIcon_${index}`;
      return (
        <Link to={path} className={classes} onClick={onClick} ref={ref} key={key}>
          <img src={src} className={styles.icon} alt={alt} />
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
    const src = isDark ? sunLight : moonDark;
    return (
      <div
        className={classNames(this.getIconContainerClasses(isDark))}
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
    const containerClasses = classNames([
      styles.navBar,
      this.state.isDark ? styles.dark : styles.light
    ]);
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

  loadingAnimationsComponent = () => {
    this.initialPage = REFS.LOADING_ANIMATIONS;
    return (<LoadingAnimations isDark={this.state.isDark}/>);
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
          <Route path={PATH_LOADING_ANIMATIONS} component={this.loadingAnimationsComponent} />
          <Route path={PATH_ABOUT} component={this.aboutComponent} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
