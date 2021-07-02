import React from 'react';
import styles from 'styles/404.module.scss';

const Error = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1>404</h1>
      </div>
      <div>
        <h1>Page Not Found</h1>
      </div>
    </div>
  );
};

export default React.memo(Error);
