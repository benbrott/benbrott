import React, { useState } from 'react';
import classNames from 'classnames';
import styles from 'styles/music.module.scss';
import { DATA } from 'data/music';
import KEY_EVENTS from 'utils/events';
import Record from 'svgComponents/Record';

const Music = () => {
  const [openIndex, setOpenIndex] = useState();

  const onAlbumClick = index => {
    const newIndex = openIndex === index ? -1 : index;
    setOpenIndex(newIndex);
  };

  const onAlbumKeyDown = (event, index) => {
    if (KEY_EVENTS.ENTER(event)) {
      onAlbumClick(index);
    }
  };

  const renderAlbum = (album, index) => {
    const { artist, title, src, backgroundColor, color } = album;
    const albumProps = {
      className: classNames([styles.albumArt, openIndex === index && styles.open]),
      onKeyDown: event => onAlbumKeyDown(event, index),
      tabIndex: 0,
      alt: `${title} by ${artist}`,
      loading: 'lazy',
      src
    };
    return (
      <div className={styles.album} onClick={() => onAlbumClick(index)} key={`album_${index}`}>
        <Record />
        <div className={styles.albumInfo} style={{ color }}>
          <span style={{ backgroundColor }}>{title}</span>
          <span style={{ backgroundColor }}>{artist}</span>
        </div>
        <img {...albumProps} />
      </div>
    );
  };

  return <div className={styles.grid}>{DATA.map((album, index) => renderAlbum(album, index))}</div>;
};

export default Music;
