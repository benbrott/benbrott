import React from 'react';
import PropTypes from 'prop-types';

class PulsingSquares extends React.PureComponent {
  static propTypes = { primaryColor: PropTypes.string }

  render() {
    const primaryColor = this.props.primaryColor;
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <defs>
          <rect id="dynamicSquare">
            <animate attributeName="width" type="width" values="86;0;86" dur="4s" repeatCount="indefinite"/>
            <animate attributeName="height" values="86;0;86" dur="4s" repeatCount="indefinite"/>
            <animate attributeName="x" values="7;50;7" dur="4s" repeatCount="indefinite"/>
            <animate attributeName="y" values="7;50;7" dur="4s" repeatCount="indefinite"/>
          </rect>
          <mask id="pulsingSquaresMask">
            <path d="
              M 10,0
              L 0,10
              M 16,0
              L 0,16
              M 22,0
              L 0,22
              M 28,0
              L 0,28
              M 34,0
              L 0,34
              M 40,0
              L 0,40
              M 46,0
              L 0,46
              M 52,0
              L 0,52
              M 58,0
              L 0,58
              M 64,0
              L 0,64
              M 70,0
              L 0,70
              M 76,0
              L 0,76
              M 82,0
              L 0,82
              M 88,0
              L 0,88
              M 94,0
              L 0,94
              M 100,0
              L 0,100
              M 100,6
              L 6,100
              M 100,12
              L 12,100
              M 100,18
              L 18,100
              M 100,24
              L 24,100
              M 100,30
              L 30,100
              M 100,36
              L 36,100
              M 100,42
              L 42,100
              M 100,48
              L 48,100
              M 100,54
              L 54,100
              M 100,60
              L 60,100
              M 100,66
              L 66,100
              M 100,72
              L 72,100
              M 100,78
              L 78,100
              M 100,84
              L 84,100
              M 100,90
              L 90,100
            " stroke="#fff" stroke-width="2"/>
            <use href="#dynamicSquare"/>
          </mask>
        </defs>
        <g mask="url(#pulsingSquaresMask)" stroke={primaryColor} stroke-width="4" fill="none">
          <rect width="86" height="86" x="7" y="7"/>
          <rect width="70" height="70" x="15" y="15"/>
          <rect width="54" height="54" x="23" y="23"/>
          <rect width="38" height="38" x="31" y="31"/>
          <rect width="22" height="22" x="39" y="39"/>
          <rect width="6" height="6" x="47" y="47"/>
          <use href="#dynamicSquare"/>
        </g>
      </svg>
    );
  }
}

export default PulsingSquares;