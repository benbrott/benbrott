import React from 'react';
import throttle from 'lodash.throttle';

function withFormFactor(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = { formFactor: this.getFormFactor() };
    }
  
    componentDidMount() {
      window.addEventListener('resize', this.handleResize);
    }
  
    componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize); 
    }
  
    // Matches $screen-width- variables in _shared.scss
    getFormFactor = () => {
      if (window.matchMedia('(max-width: 46em)').matches) {
        return 'PHONE';
      } else if (window.matchMedia('(max-width: 66em)').matches) {
        return 'TABLET';
      } else {
        return 'DESKTOP'
      }
    }
  
    handleResize = throttle(() => {
      this.setState({ formFactor: this.getFormFactor() });
    }, 100)
    
    render() {
      const formFactor = this.state.formFactor;
      const isMobile = formFactor !== 'DESKTOP';
      return <WrappedComponent formFactor={formFactor} isMobile={isMobile} {...this.props} />;
    }
  };
}

export default withFormFactor;