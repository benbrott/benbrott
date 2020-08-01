import React from 'react';
import PropTypes from 'prop-types';
import withTheming from 'utils/withTheming';

class Loading extends React.PureComponent {
  static propTypes = { primaryColor: PropTypes.string }
  static defaultProps = { primaryColor: '#000' }

  render() {
    const primaryColor = this.props.primaryColor;
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <defs>
          <circle id="circle" cx="50" cy="9.5" r="9" fill={primaryColor}/>
        </defs>
        <use href="#circle" transform="rotate(30, 50, 50)" opacity="0.05"/>
        <use href="#circle" transform="rotate(60, 50, 50)" opacity="0.1"/>
        <use href="#circle" transform="rotate(90, 50, 50)" opacity="0.2"/>
        <use href="#circle" transform="rotate(120, 50, 50)" opacity="0.3"/>
        <use href="#circle" transform="rotate(150, 50, 50)" opacity="0.4"/>
        <use href="#circle" transform="rotate(180, 50, 50)" opacity="0.5"/>
        <use href="#circle" transform="rotate(210, 50, 50)" opacity="0.6"/>
        <use href="#circle" transform="rotate(240, 50, 50)" opacity="0.7"/>
        <use href="#circle" transform="rotate(270, 50, 50)" opacity="0.8"/>
        <use href="#circle" transform="rotate(300, 50, 50)" opacity="0.9"/>
        <use href="#circle" transform="rotate(330, 50, 50)" opacity="1"/>
      </svg>
    );
  }
}

export default withTheming(Loading);