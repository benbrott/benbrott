import React from 'react';
import PropTypes from 'prop-types';

const RotatingSquares = ({ primaryColor }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" stroke={primaryColor} stroke-width="3" strokeLinejoin="round" fill="none">
      <path d="
        M 10,50       
        L 50,10       
        L 90,50
        L 50,90
        Z
      ">
        <animateTransform attributeName="transform" type="rotate" values="0 50 50;45 50 50;90 50 50;90 50 50"  dur="2s" repeatCount="indefinite"/>
        <animate attributeName="stroke-width" values="1;3;1;1;"  dur="2s" repeatCount="indefinite"/>
      </path>
      <path d="
        M 30,30       
        L 70,30       
        L 70,70
        L 30,70
        Z
      ">
        <animateTransform attributeName="transform" type="rotate" values="90 50 50;45 50 50;0 50 50;0 50 50"  dur="2s" repeatCount="indefinite"/>
        <animate attributeName="stroke-width" values="1;3;1;1;"  dur="2s" repeatCount="indefinite"/>
      </path>
      <path d="
        M 50,30       
        L 70,50       
        L 50,70
        L 30,50
        Z
      ">
        <animateTransform attributeName="transform" type="rotate" values="0 50 50;45 50 50;90 50 50;90 50 50"  dur="2s" repeatCount="indefinite"/>
        <animate attributeName="stroke-width" values="1;3;1;1;"  dur="2s" repeatCount="indefinite"/>
      </path>
    </svg>
  );
}

RotatingSquares.propTypes = { primaryColor: PropTypes.string }

export default RotatingSquares;