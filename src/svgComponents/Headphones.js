import React from 'react';
import PropTypes from 'prop-types';
import withTheming from 'utils/withTheming';

class Headphones extends React.PureComponent {
  static propTypes = { primaryColor: PropTypes.string }

  render() {
    const primaryColor = this.props.primaryColor;
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <defs>
          <path id="cup" d="
            M 0,8
            L 0,38
            L 6,42
            A 6 4 0 1 0 18,42
            L 18,4
            A 6 4 0 1 0 6,4
            Z
          " stroke={primaryColor} fill={primaryColor} strokeWidth="2" strokeLinejoin="round" transform="rotate(-25)"/>
        </defs>
        <path d="
          M 16,70       
          L 8,50
          A 42 42 0 0 1 92,50
          L 84,70
        " stroke={primaryColor} strokeWidth="6" strokeLinejoin="round" fill="none"/>
        <use href="#cup" x="5" y="56"/>
        <use href="#cup" x="0" y="56" transform="translate(95) scale(-1, 1)"/>
      </svg>
    );
  }
}

export default withTheming(Headphones);