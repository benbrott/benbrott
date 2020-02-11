import React from 'react';
import PropTypes from 'prop-types';

class Hourglass extends React.PureComponent {
  static propTypes = { primaryColor: PropTypes.string }
  static defaultProps = { primaryColor: '#000' }

  renderFallingSand = primaryColor => {
    return [0, 0.1, 0.2].map(delay => {
      return (
        <rect x="48.5" y="43" width="3" height="3" rx="0.7" ry="0.7" fill={primaryColor}>
          <animate attributeName="y" values="43;44;45;47;50;53;57;61;65;66" dur="1s" repeatCount="indefinite" calcMode="discrete" begin={`${delay}s`}/>
        </rect>
      );
    });
  }

  render() {
    const primaryColor = this.props.primaryColor;
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <defs>
          <rect id="base" x="6" y="6" rx="2" ry="2" width="88" height="8" fill={primaryColor}/>
        </defs>
        <use href="#base"/>
        <use href="#base" transform="rotate(180, 50, 50)"/>
        <path d="
          M 88,10
          L 88,18
          L 58,48
          L 58,52
          L 88,82
          L 88,90
          M 12,90
          L 12,82
          L 42,52
          L 42,48
          L 12,18
          L 12,10
        " stroke={primaryColor} strokeWidth="6" strokeLinejoin="round" fill="none"/>
        <path d="
          M 50,47
          L 30,27
          L 70,27
          Z
          M 50,66
          L 20,83
          L 80,83
          Z
        " stroke={primaryColor} fill={primaryColor} strokeWidth="1" strokeLinejoin="round"/>
        {this.renderFallingSand(primaryColor)}
      </svg>
    );
  }
}

export default Hourglass;