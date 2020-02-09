import React from 'react';

class Moon extends React.PureComponent {
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <defs>
          <mask id="mask">
            <rect width="100" height="100" fill="#fff"/>
            <circle cx="65" cy="35" r="35" fill="#000"/>
          </mask>
        </defs>
        <circle cx="50" cy="50" r="40" fill="#000" mask="url(#mask)"/>
      </svg>
    );
  }
}

export default Moon;