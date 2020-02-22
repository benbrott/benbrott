import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter, Route, Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './App.module.scss';
import Home from './Home/Home'
import Music from './Music/Music'
import About from './About/About'
import Headphones from 'svgComponents/Headphones';
import House from 'svgComponents/House';
import Lego from 'svgComponents/Lego';
import Loading from 'svgComponents/Loading';
import Moon from 'svgComponents/Moon';
import Sun from 'svgComponents/Sun';
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
    Component: House,
    path: PATH_HOME,
    ref: REFS.HOME
  },
  {
    Component: Headphones,
    path: PATH_MUSIC,
    ref: REFS.MUSIC
  },
  {
    Component: Loading,
    path: PATH_LOADING_ANIMATIONS,
    ref: REFS.LOADING_ANIMATIONS
  },
  {
    Component: Lego,
    path: PATH_ABOUT,
    ref: REFS.ABOUT
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

  iconIsDark = (themes, isDark, currentIcon) => {
    if (isDark) {
      return currentIcon;
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
    return NAV_ICONS.map(({Component, path, ref}, index) => {
      const currentIcon = ref === currentPage;
      const classes = classNames([
        ...this.getIconContainerClasses(isDark),
        currentIcon && styles.currentIcon
      ]);
      const onClick = () => this.onNavIconClick(ref);
      const key = `navIcon_${index}`;
      return (
        <Link to={path} className={classes} onClick={onClick} ref={ref} key={key}>
          <Component isDark={isDark ? currentIcon : !currentIcon}/>
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
    const Component = isDark ? Sun : Moon;
    return (
      <div
        className={classNames(this.getIconContainerClasses(isDark))}
        onClick={this.toggleTheme}
        onKeyPress={this.onThemeIconKeyPress}
        tabIndex={0}
        ref={REFS.THEME}
      >
        <Component/>
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
