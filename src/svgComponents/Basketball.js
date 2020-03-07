import React from 'react';
import PropTypes from 'prop-types';

class Basketball extends React.PureComponent {
  static propTypes = { primaryColor: PropTypes.string }
  static defaultProps = { primaryColor: '#000' }

  render() {
    const primaryColor = this.props.primaryColor;
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <rect y="94" x="5" width="90" height="2" rx="1" ry="1" fill={primaryColor} stroke="none"/>
        <path d="
          M 93,95
          L 93,32
          A 8 8, 0, 0, 0, 85 24
          L 77,24
        " stroke={primaryColor} stroke-width="4" fill="none"/>
        <rect y="5" x="75" width="3" height="25" fill={primaryColor} stroke="none"/>
        <polygon points="75,26 71,22 75,22" fill={primaryColor} stroke="none"/>
        <path d="M 75,23 L 61,23" stroke={primaryColor} stroke-width="2" stroke-linecap="round"/>
        <path d="
          M 61,23
          L 62,29
          L 63,23
          L 64,29
          L 65,23
          L 66,29
          L 67,23
          L 68,29
          L 69,23
          L 70,29
          L 71,23
          M 62,33
          L 62,29
          L 66,33
          L 70,29
          L 70,33
          L 66,29
          Z  
          M 62,31
          L 64,29
          L 68,33
          L 70,31
          L 68,29
          L 64,33
          Z
        " stroke={primaryColor} stroke-width="1" stroke-linejoin="round" fill="none"/>
        <circle r="4" fill={primaryColor}>
          <animate 
            values="
              9;15;21;27;33;39;45;51;57;63;
              67;66;65;64;62;60;
              58;56;53;50;47;44;41;38;
              35;32;29;26;23;20;
              17;14;11;9;
              9;9;9;9;9;
              9;9;9;
              9;9;9;9;9;
            " attributeName="cx" dur="2s" repeatCount="indefinite"/>
          <animate 
            values="
              55;44;34;25;17;12;10;11;13;17;
              23;30;38;49;68;91;
              75;65;60;58;60;65;75;91;
              81;76;74;76;81;91;
              87;89;87;91;
              91;91;91;91;91;
              89;77;66;
              55;55;55;55;55;
            " attributeName="cy" dur="2s" repeatCount="indefinite"/>
        </circle>
      </svg>
    );
  }
}

export default Basketball;