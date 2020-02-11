import React from 'react';
import PropTypes from 'prop-types';

class Maze extends React.PureComponent {
  static propTypes = { primaryColor: PropTypes.string }
  static defaultProps = { primaryColor: '#000' }

  render() {
    const primaryColor = this.props.primaryColor;
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <path  d="
          M 5,5
          L 95,5
          L 95,95
          L 5,95
          Z
          M 27.5,27.5
          L 72.5,27.5
          L 72.5,72.5
          L 27.5,72.5
          L 27.5,50
          L 50,50
        " fill="none" stroke={primaryColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <rect width="22.5" height="22.5" rx="1" ry="1" stroke={primaryColor} strokeWidth="3" fill={primaryColor}>
          <animate 
            values="
              5;27.5;50;72.5;
              72.5;72.5;72.5;
              50;27.5;5;
              5;5;
              27.5;50;
              50;
              27.5;
              27.5;
              27.5;
              50;
              50;27.5;
              5;
              5;
            " attributeName="x" dur="3s" repeatCount="indefinite"/>
          <animate 
            values="
              5;5;5;5;
              27.5;50;72.5;
              72.5;72.5;72.5;
              50;27.5;
              27.5;27.5;
              50;
              50;
              50;
              50;
              50;
              27.5;27.5;
              27.5;
              5;
            " attributeName="y" dur="3s" repeatCount="indefinite"/>
        </rect>
      </svg>
    );
  }
}

export default Maze;