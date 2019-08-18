import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import throttle from 'lodash.throttle';
import styles from './Home.module.css';
import logoNameLight from './logoNameLight.svg';
import logoNameDark from './logoNameDark.svg';
import logoNameFlatLight from './logoNameFlatLight.svg';
import logoNameFlatDark from './logoNameFlatDark.svg';

class Home extends React.Component {
  static propTypes = { isDark: PropTypes.bool }
  static defaultProps = { isDark: false }

  constructor(props) {
    super(props);
    this.state = { isNarrow: this.isNarrowScreen() };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize); 
  }

  isNarrowScreen = () => window.matchMedia('(max-width: 58em)').matches

  handleResize = throttle(() => {
    const isNarrow = this.isNarrowScreen();
    if (this.state.isNarrow !== isNarrow) {
      this.setState({ isNarrow });
    }
  }, 100)

  getBannerSrc = () => {
    const isDark = this.props.isDark;
    if (this.state.isNarrow) {
      return isDark ? logoNameLight : logoNameDark;
    }
    return isDark ? logoNameFlatLight : logoNameFlatDark;
  }

  render() {
    return (
      <div className={styles.container}>
        <img src={this.getBannerSrc()} className={styles.banner} alt="" />
      </div>
    );
  }
}

export default Home;