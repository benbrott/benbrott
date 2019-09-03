import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import throttle from 'lodash.throttle';
import styles from './About.module.scss';
import logoNameLight from 'assets/logoNameLight.svg';
import logoNameDark from 'assets/logoNameDark.svg';
import logoNameFlatLight from 'assets/logoNameFlatLight.svg';
import logoNameFlatDark from 'assets/logoNameFlatDark.svg';

class About extends React.PureComponent {
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

  isNarrowScreen = () => window.matchMedia('(max-width: 66em)').matches

  handleResize = throttle(() => {
    const isNarrow = this.isNarrowScreen();
    this.setState({ isNarrow });
  }, 100)

  getBannerSrc = () => {
    const isDark = this.props.isDark;
    if (this.state.isNarrow) {
      return isDark ? logoNameLight : logoNameDark;
    }
    return isDark ? logoNameFlatLight : logoNameFlatDark;
  }

  renderText = () => {
    const isDark = this.props.isDark;
    const textStyles = classNames([
      styles.text,
      isDark ? styles.dark : styles.light
    ]);
    return (
      <div className={textStyles}>
        <p>
          Hello! My name is Ben and I am a software engineer at Appian, currently working with React and React Native.
          I have always been interested in visual design but have never had the chance to do such work on a daily basis.
          In July 2019, I attended a web design conference, <a href="https://aneventapart.com/event/washington-dc-2019">An Event Apart DC</a>, which inspired me to create this site.
          Here are a few things I hope to accomplish:
        </p>
        <ul>
          <li>Learn more CSS and SVG</li>
          <li>Design eye-catching and responsive UIs</li>
          <li>Combine my technical and non-technical interests</li>
        </ul>
        <p>
          Feel free to contact me on any of the platforms linked below. I hope you enjoy!
        </p>
      </div>
    
    );
  }

  render() {
    return (
      <div className={styles.container}>
        <img src={this.getBannerSrc()} className={styles.banner} alt="" />
        {this.renderText()}
      </div>
    );
  }
}

export default About;