import React from 'react';
import throttle from 'lodash.throttle';

function withFormFactor(WrappedComponent, alwaysUpdate) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        formFactor: this.getFormFactor(),
        lastUpdate: this.getTimestamp()
      };
    }

    componentDidMount() {
      window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize);
    }

    // Matches $screen-width- variables in _shared.scss
    getFormFactor = () => {
      if (window.matchMedia('(max-width: 42em)').matches) {
        return 'PHONE';
      } else if (window.matchMedia('(max-width: 66em)').matches) {
        return 'TABLET';
      } else {
        return 'DESKTOP';
      }
    };

    getTimestamp = () => new Date().toUTCString();

    handleResize = throttle(
      () => {
        this.setState(prevState => {
          const formFactor = this.getFormFactor();
          const lastUpdate = this.getTimestamp();
          if (alwaysUpdate || prevState.formFactor !== formFactor) {
            return { formFactor, lastUpdate };
          }
          return prevState;
        });
      },
      100,
      { leading: true, trailing: true }
    );

    render() {
      const { formFactor, lastUpdate } = this.state;
      const isMobile = formFactor !== 'DESKTOP';
      return <WrappedComponent formFactor={formFactor} isMobile={isMobile} lastUpdate={lastUpdate} {...this.props} />;
    }
  };
}

export default withFormFactor;
