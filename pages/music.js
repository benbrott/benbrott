import React, { useCallback, useState } from 'react';
import classNames from 'classnames';
import styles from 'styles/music.module.scss';
import DATA from 'data/music';
import KEY_EVENTS from 'utils/events';

const Music = () => {
  const [openIndex, setOpenIndex] = useState();

  const onAlbumClick = useCallback(
    index => {
      const newIndex = openIndex === index ? -1 : index;
      setOpenIndex(newIndex);
    },
    [openIndex]
  );

  const onAlbumKeyDown = useCallback((event, index) => {
    if (KEY_EVENTS.ENTER(event)) {
      onAlbumClick(index);
    }
  });

  return (
    <div className={styles.grid}>
      {DATA.map((album, index) => {
        const { artist, title, src } = album;
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
            <div className={styles.albumInfo}>
              <span>{artist}</span>
              <span>{title}</span>
            </div>
            <img {...albumProps} />
          </div>
        );
      })}
    </div>
  );
};

export default Music;
