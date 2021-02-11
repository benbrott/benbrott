import React from 'react';
import styles from 'styles/loadingAnimations.module.scss';
import Hourglass from 'svgComponents/Hourglass';
import Maze from 'svgComponents/Maze';
import Pulse from 'svgComponents/Pulse';
import PulsingSquares from 'svgComponents/PulsingSquares';
import RotatingSquares from 'svgComponents/RotatingSquares';

const LoadingAnimations = () => {
  const renderLoadingAnimations = () => {
    return [Hourglass, Maze, Pulse, PulsingSquares, RotatingSquares].map((Component, index) => {
      const key = `animation_${index}`;
      return (
        <div key={key} className={styles.container}>
          <Component primaryColor={'#fcb514'} />
        </div>
      );
    });
  };

  return <div className={styles.grid}>{renderLoadingAnimations()}</div>;
};

export default LoadingAnimations;
