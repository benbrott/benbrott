import React from 'react';
import PropTypes from 'prop-types';
import withTheming from 'utils/withTheming';

const House = ({ primaryColor }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <path d="
        M 11,93       
        L 11,50       
        L 7,50
        L 50,7
        L 93,50
        L 89,50
        L 89,93
        L 62,93
        L 62,68
        Q 62,63 57,63
        L 43,63
        Q 38,63 38,68
        L 38,93
        Z
      " stroke={primaryColor} fill={primaryColor} strokeWidth="4" strokeLinejoin="round"/>
    </svg>
  );
}

House.propTypes = { primaryColor: PropTypes.string }

export default withTheming(House);