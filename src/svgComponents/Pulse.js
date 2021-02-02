import React from 'react';
import PropTypes from 'prop-types';

const Pulse = ({ primaryColor }) => {
  const renderCircle = (radiusValues, opacityValues) => {
    return (
      <circle cx="50" cy="50">
        <animate values={radiusValues} attributeName="r" dur="2s" repeatCount="indefinite"/>
        <animate values={opacityValues} attributeName="opacity" dur="2s" repeatCount="indefinite"/>
      </circle>
    );
  };

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill={primaryColor}>
      {renderCircle('10;15;10', '0.7;0.2;0.7')}
      {renderCircle('10;45', '0.7;0.5;0')}
      {renderCircle('10;36', '0.5;0')}
      {renderCircle('10;29', '0.5;0')}
      {renderCircle('10;24', '0.5;0')}
      {renderCircle('10;20', '0.5;0')}
      {renderCircle('10;17', '0.5;0')}
    </svg>
  );
}

Pulse.propTypes = { primaryColor: PropTypes.string }

export default Pulse;