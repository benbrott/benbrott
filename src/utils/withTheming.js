import React from 'react';
import PropTypes from 'prop-types';

const withTheming = WrappedComponent => props => {
  const primaryColor = props.isDark ? '#000' : '#eee';
  return <WrappedComponent primaryColor={primaryColor} {...props} />;
};

withTheming.propTypes = { primaryColor: PropTypes.string };
withTheming.defaultProps = { isDark: false };

export default withTheming;
