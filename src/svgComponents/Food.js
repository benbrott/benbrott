import React from 'react';
import PropTypes from 'prop-types';
import withTheming from './withTheming';

class Food extends React.PureComponent {
  static propTypes = { primaryColor: PropTypes.string }
  static defaultProps = { primaryColor: '#000' }

  render() {
    const primaryColor = this.props.primaryColor;
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" stroke={primaryColor} stroke-linejoin="round" fill={primaryColor}>
        <defs>
          <path id="steam" d="
            M 0,5
            C 5,11 5,13 0,19
            S -15,27 0,35
            C -5,29 -5,27 0,21
            S 15,13 0,5
            Z      
          "/>
          <polygon id="chopstick" points="1,5 0,75 -1,5"/>
        </defs>
        <use href="#steam" x="38"/>
        <use href="#steam" x="50"/>
        <use href="#steam" x="62"/>
        <path d="
          M 93,50
          Q 93,93 55,93
          L 45,93
          Q 7,93 7,50
          Z
        " stroke-width="4"/>
        <use href="#chopstick" x="70" y="15" transform="rotate(20, 70, 55)"/>
        <use href="#chopstick" x="75" y="15" transform="rotate(30, 75, 55)"/>
      </svg>
    );
  }
}

export default withTheming(Food);