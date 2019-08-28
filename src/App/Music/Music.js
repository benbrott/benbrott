import React from 'react';
import classNames from 'classnames';
import styles from './Music.module.css';
import { DATA } from './data';
import { KEYS, killEvent } from '../../utils/events';
import record from '../assets/record.svg';

class Music extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {}
  }

  onAlbumClick = index => {
    this.setState(state => {
      const isClosing = state.openIndex === index;
      const openIndex =  isClosing ? undefined : index;
      const focusIndex = isClosing ? undefined : index;
      return { openIndex, focusIndex };
    });
  }

  onAlbumBlur = () => {
    this.setState({ openIndex: undefined, focusIndex: undefined });
  }

  onAlbumFocus = focusIndex => {
    this.setState({ focusIndex });
  }

  onAlbumKeyPress = (event, index) => {
    switch (event.key) {
      case KEYS.ENTER:
        this.onAlbumClick(index);
        break;
      case KEYS.SPACE:
        killEvent(event);
        this.onAlbumClick(index);
        break;
      default:
        break;
    }
  }

  renderAlbum = (album, index) => {
    const { artist, title, src, backgroundColor, color } = album;
    const { focusIndex, openIndex } = this.state;
    const albumProps = {
      className: styles.album,
      onClick: () => this.onAlbumClick(index),
      onBlur: this.onAlbumBlur,
      onFocus: () => this.onAlbumFocus(index),
      onKeyPress: event => this.onAlbumKeyPress(event, index),
      tabIndex: 0,
      key: `album_${index}`
    };
    const albumArtClasses = classNames([
      styles.albumArt,
      openIndex === index && styles.open,
      focusIndex === index && styles.focus
    ]);
    const albumArtAlt = `${title} by ${artist}`;
    return (
      <div {...albumProps}>
        <img src={record} className={styles.record} alt="" />
        <div className={styles.albumInfo} style={{ color }}>
          <span style={{ backgroundColor }}>{title}</span>
          <span style={{ backgroundColor }}>{artist}</span>
        </div>
        <img src={src} className={albumArtClasses} alt={albumArtAlt} />
      </div>
    )
  }

  render() {
    return (
      <div className={styles.grid}>
        {DATA.map(((album, index) => this.renderAlbum(album, index)))}
      </div>
    );
  }
}

export default Music;