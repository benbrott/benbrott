import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './App.module.scss';
import Music from './Music/Music';
import Recipes from './Recipes/Recipes';
import Crossword from './Crossword/Crossword';
import LoadingAnimations from './LoadingAnimations/LoadingAnimations';
import About from './About/About';
import Food from 'svgComponents/Food';
import CrosswordIcon from 'svgComponents/CrosswordIcon';
import Headphones from 'svgComponents/Headphones';
import House from 'svgComponents/House';
import Loading from 'svgComponents/Loading';
import Moon from 'svgComponents/Moon';
import Sun from 'svgComponents/Sun';
import KEY_EVENTS from 'utils/events';

const PATH_HOME = '/';
const PATH_MUSIC = '/music';
const PATH_RECIPES = '/recipes';
const PATH_CROSSWORD = '/crossword';
const PATH_LOADING_ANIMATIONS = '/loadingAnimations';

const REFS = {
  HOME: 'home',
  MUSIC: 'music',
  RECIPES: 'recipes',
  CROSSWORD: 'crossword',
  LOADING_ANIMATIONS: 'loading animations',
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
    Component: Food,
    path: PATH_RECIPES,
    ref: REFS.RECIPES
  },
  {
    Component: CrosswordIcon,
    path: PATH_CROSSWORD,
    ref: REFS.CROSSWORD
  },
  {
    Component: Loading,
    path: PATH_LOADING_ANIMATIONS,
    ref: REFS.LOADING_ANIMATIONS
  }
];

const THEME = 'THEME';
const LIGHT = 'LIGHT';
const DARK = 'DARK';
const LIGHT_BACKGROUND = '#999';
const DARK_BACKGROUND = '#333';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isDark: this.initialThemeIsDark(),
      currentPage: undefined
    };
  }

  componentDidMount() {
    document.body.style.backgroundColor = this.state.isDark ? DARK_BACKGROUND : LIGHT_BACKGROUND;
    this.setState({ currentPage: this.initialPage });
  }

  componentWillUnmount() {
    document.body.style.backgroundColor = null;
  }

  initialThemeIsDark = () => {
    const storedTheme = localStorage.getItem(THEME);
    return storedTheme ? storedTheme === DARK : window.matchMedia('(prefers-color-scheme: dark)').matches;
  };

  onNavIconClick = ref => {
    this.setState({ currentPage: ref });
  };

  getIconContainerClasses = isDark => {
    return [styles.iconContainer, isDark ? styles.dark : styles.light];
  };

  renderNavIcons = () => {
    const { isDark, currentPage } = this.state;
    return NAV_ICONS.map(({ Component, path, ref }, index) => {
      const currentIcon = ref === currentPage;
      const classes = classNames([...this.getIconContainerClasses(isDark), currentIcon && styles.currentIcon]);
      const onClick = () => this.onNavIconClick(ref);
      const key = `navIcon_${index}`;
      return (
        <Link to={path} className={classes} onClick={onClick} ref={ref} key={key}>
          <Component isDark={isDark ? currentIcon : !currentIcon} />
        </Link>
      );
    });
  };

  toggleTheme = () => {
    const toggleDark = !this.state.isDark;
    localStorage.setItem(THEME, toggleDark ? DARK : LIGHT);
    document.body.style.backgroundColor = toggleDark ? DARK_BACKGROUND : LIGHT_BACKGROUND;
    this.setState({ isDark: toggleDark });
  };

  onThemeIconKeyDown = event => {
    if (KEY_EVENTS.ENTER(event)) {
      this.toggleTheme();
    }
  };

  renderThemeIcon = () => {
    const isDark = this.state.isDark;
    const Component = isDark ? Sun : Moon;
    return (
      <div
        className={classNames(this.getIconContainerClasses(isDark))}
        onClick={this.toggleTheme}
        onKeyDown={this.onThemeIconKeyDown}
        tabIndex={0}
        ref={REFS.THEME}
      >
        <Component />
      </div>
    );
  };

  renderNavBar = () => {
    const containerClasses = classNames([styles.navBar, this.state.isDark ? styles.dark : styles.light]);
    return (
      <div className={containerClasses}>
        <div className={styles.iconGroup}>{this.renderNavIcons()}</div>
        <div className={styles.iconGroup}>{this.renderThemeIcon()}</div>
      </div>
    );
  };

  homeComponent = () => {
    this.initialPage = REFS.HOME;
    return <About isDark={this.state.isDark} />;
  };

  musicComponent = () => {
    this.initialPage = REFS.MUSIC;
    return <Music isDark={this.state.isDark} />;
  };

  recipesComponent = () => {
    this.initialPage = REFS.RECIPES;
    return <Recipes isDark={this.state.isDark} />;
  };

  crosswordComponent = () => {
    this.initialPage = REFS.CROSSWORD;
    return <Crossword isDark={this.state.isDark} />;
  };

  loadingAnimationsComponent = () => {
    this.initialPage = REFS.LOADING_ANIMATIONS;
    return <LoadingAnimations isDark={this.state.isDark} />;
  };

  render() {
    return (
      <HashRouter basename={PATH_HOME}>
        <div className={styles.container}>
          {this.renderNavBar()}
          <div className={styles.pageContainer}>
            <Route path={PATH_HOME} exact component={this.homeComponent} />
            <Route path={PATH_MUSIC} component={this.musicComponent} />
            <Route path={PATH_RECIPES} component={this.recipesComponent} />
            <Route path={PATH_CROSSWORD} component={this.crosswordComponent} />
            <Route path={PATH_LOADING_ANIMATIONS} component={this.loadingAnimationsComponent} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
