import React from 'react';
import styles from './App.module.css';
import Music from './Music/Music'

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.navBar} />
      <Music />
    </div>
  );
}

export default App;
