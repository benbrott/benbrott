import React from 'react';
import PropTypes from 'prop-types';
import withTheming from 'utils/withTheming';

class Lego extends React.PureComponent {
  static propTypes = { primaryColor: PropTypes.string }
  static defaultProps = { primaryColor: '#000' }

  render() {
    const primaryColor = this.props.primaryColor;
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <g stroke={primaryColor} fill={primaryColor}>
          <rect x="32" y="5" width="36" height="45" rx="6"/>
          <rect x="23" y="50" width="52" height="45" rx="3"/>
          <rect x="8" y="18" width="84" height="67" rx="15"/>
        </g>
      </svg>
    );
  }
}

export default withTheming(Lego);