import React, { useState, useEffect } from 'react';
import throttle from 'lodash.throttle';

// Matches $screen-width- variables in _shared.scss
const getFormFactor = () => {
  if (window.matchMedia('(max-width: 42em)').matches) {
    return 'PHONE';
  } else if (window.matchMedia('(max-width: 66em)').matches) {
    return 'TABLET';
  } else {
    return 'DESKTOP';
  }
};

const withFormFactor = WrappedComponent => props => {
  const [formFactor, setFormFactor] = useState(getFormFactor());

  const handleResize = throttle(
    () => {
      setFormFactor(getFormFactor());
    },
    100,
    { leading: true, trailing: true }
  );

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  const isMobile = formFactor !== 'DESKTOP';
  return <WrappedComponent formFactor={formFactor} isMobile={isMobile} {...props} />;
};

export default withFormFactor;
