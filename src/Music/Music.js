import React from 'react';
import styles from './Music.module.css';
import { DATA } from './data';
import classNames from 'classnames';

class Music extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  onItemClick = index => {
    this.setState(state => {
      const open = state.open === index ? undefined : index;
      return { open };
    });
  }

  renderItem = (album, index) => {
    const { artist, title, src, backgroundColor, color, shadowColor } = album;
    const alt = `${title} by ${artist}`;
    const classes = classNames([
      styles.album,
      this.state.open === index && styles.open
    ]);
    const boxShadowColor = shadowColor;
    return (
      <div className={styles.gridItem} onClick={() => this.onItemClick(index)} tabIndex={0} key={index}>
        <img src={src} className={classes} style={{ color: boxShadowColor }} alt={alt} />
        <div className={styles.albumInfo} style={{ color }}>
          <span className={styles.title} style={{ backgroundColor }}>{title}</span>
          <span className={styles.artist} style={{ backgroundColor }}>{artist}</span>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className={styles.grid}>
        {DATA.map(((album, index) => this.renderItem(album, index)))}
      </div>
    );
  }
}

export default Music;