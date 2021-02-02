import React from 'react';
import classNames from 'classnames';
import styles from './Music.module.scss';
import { DATA } from './data';
import KEY_EVENTS from 'utils/events';
import Record from 'svgComponents/Record';

class Music extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onAlbumClick = index => {
    this.setState(state => {
      const isClosing = state.openIndex === index;
      const openIndex = isClosing ? undefined : index;
      const focusIndex = isClosing ? undefined : index;
      return { openIndex, focusIndex };
    });
  };

  onAlbumBlur = () => {
    this.setState({ openIndex: undefined, focusIndex: undefined });
  };

  onAlbumFocus = focusIndex => {
    this.setState({ focusIndex });
  };

  onAlbumKeyDown = (event, index) => {
    if (KEY_EVENTS.ENTER(event)) {
      this.onAlbumClick(index);
    }
  };

  renderAlbum = (album, index) => {
    const { artist, title, src, backgroundColor, color } = album;
    const { focusIndex, openIndex } = this.state;
    const albumProps = {
      className: styles.album,
      onClick: () => this.onAlbumClick(index),
      onBlur: this.onAlbumBlur,
      onFocus: () => this.onAlbumFocus(index),
      onKeyDown: event => this.onAlbumKeyDown(event, index),
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
        <Record />
        <div className={styles.albumInfo} style={{ color }}>
          <span style={{ backgroundColor }}>{title}</span>
          <span style={{ backgroundColor }}>{artist}</span>
        </div>
        <img src={src} className={albumArtClasses} alt={albumArtAlt} loading="lazy" />
      </div>
    );
  };

  render() {
    return <div className={styles.grid}>{DATA.map((album, index) => this.renderAlbum(album, index))}</div>;
  }
}

export default Music;
