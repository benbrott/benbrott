import React from 'react';
import PropTypes from 'prop-types';
import withTheming from 'utils/withTheming';

const CrosswordIcon = ({ primaryColor }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" stroke={primaryColor} strokeWidth="3">
      <defs>
        <rect id="number" x="0" y="0" width="2" height="2"/>
      </defs>
      <g fill="none">
        <rect x="5" y="5" width="90" height="90"/>
        <rect x="35" y="5" width="30" height="90"/>
        <rect x="5" y="35" width="90" height="30"/>
      </g>
      <g fill={primaryColor}>
        <rect x="5" y="65" width="30" height="30"/>
        <rect x="65" y="5" width="30" height="30"/>
        <use href="#number" x="11" y="11"/>
        <use href="#number" x="11" y="41"/>
        <use href="#number" x="41" y="11"/>
        <use href="#number" x="41" y="71"/>
        <use href="#number" x="71" y="41"/>
      </g>
    </svg>
  );
}

CrosswordIcon.propTypes = { primaryColor: PropTypes.string }

export default withTheming(CrosswordIcon);