import React from 'react';
import PropTypes from 'prop-types';

function withTheming(WrappedComponent) {
  return class extends React.Component {
    static propTypes = { isDark: PropTypes.bool }
    static defaultProps = { isDark: false }
    
    render() {
      const primaryColor = this.props.isDark ? '#000' : '#eee';
      return <WrappedComponent primaryColor={primaryColor} {...this.props} />;
    }
  };
}

export default withTheming;