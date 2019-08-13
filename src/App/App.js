import React from 'react';
import styles from './App.module.css';
import Music from '../Music/Music'
import headphones from './headphones.svg';
import logoLight from './logoLight.svg';

const icons = [
  {
    src: logoLight,
    title: "Home"
  },
  {
    src: headphones,
    title: "Music"
  }
];

const renderIcons = () => {
  return icons.map((icon, index) => {
    return (
      <div className={styles.iconContainer} key={`icon_${index}`}>
        <img src={icon.src} className={styles.icon} alt={icon.title} />
      </div>
    );
  });
}

const renderNavBar = () => {
  return (
    <div className={styles.navBar}>
      {renderIcons()}
    </div>
  );
}

const App = () => {
  return (
    <div className={styles.container}>
      {renderNavBar()}
      <Music />
    </div>
  );
}

export default App;
