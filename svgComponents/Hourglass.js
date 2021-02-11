import React from 'react';
import PropTypes from 'prop-types';

const Hourglass = ({ primaryColor }) => {
  const renderFallingSand = () => {
    return [0, 0.1, 0.2].map((delay, index) => {
      const key = `sand_${index}`;
      return (
        <rect key={key} x="48.5" y="43" width="3" height="3" rx="0.7" ry="0.7" fill={primaryColor}>
          <animate
            attributeName="y"
            values="43;44;45;47;50;53;57;61;65;66"
            dur="1s"
            repeatCount="indefinite"
            calcMode="discrete"
            begin={`${delay}s`}
          />
        </rect>
      );
    });
  };

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <defs>
        <rect id="base" x="6" y="6" rx="2" ry="2" width="88" height="8" fill={primaryColor} />
      </defs>
      <use href="#base" />
      <use href="#base" transform="rotate(180, 50, 50)" />
      <path
        d="
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
      "
        stroke={primaryColor}
        strokeWidth="3"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="
        M 51,48
        L 49,48
        L 29,28
        L 71,28
        Z
        M 51,68
        L 49,68
        L 20,83
        L 80,83
        Z
      "
        stroke={primaryColor}
        fill={primaryColor}
        strokeWidth="1"
        strokeLinejoin="round"
      />
      {renderFallingSand()}
    </svg>
  );
};

Hourglass.propTypes = { primaryColor: PropTypes.string };

export default Hourglass;
