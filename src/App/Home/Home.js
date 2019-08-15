import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Home.module.css';
import logoNameFlatLight from './logoNameFlatLight.svg';
import logoNameFlatDark from './logoNameFlatDark.svg';

class Home extends React.Component {
  static propTypes = {
    isDark: PropTypes.bool
  }

  static defaultProps = {
    isDark: false
  }

  render() {
    return (
      <div className={styles.container}>
        <img src={this.props.isDark ? logoNameFlatLight : logoNameFlatDark} className={styles.banner} alt="" />
      </div>
    );
  }
}

export default Home;