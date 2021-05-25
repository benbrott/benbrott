import React, { KeyboardEvent, useCallback, useState } from 'react';
import styles from 'styles/music.module.scss';
import DATA from 'data/music';
import KEY_EVENTS from 'utils/events';
import classNames from 'utils/classNames';

const Music = () => {
  const [openIndex, setOpenIndex] = useState<number>();

  const onAlbumClick = useCallback(
    (index: number) => {
      const newIndex = openIndex === index ? -1 : index;
      setOpenIndex(newIndex);
    },
    [openIndex]
  );

  const onAlbumKeyDown = useCallback(
    (event: KeyboardEvent, index: number) => {
      if (KEY_EVENTS.ENTER(event)) {
        onAlbumClick(index);
      }
    },
    [onAlbumClick]
  );

  return (
    <div className={styles.grid}>
      {DATA.map((album, index) => {
        const { artist, title, src } = album;
        return (
          <div className={styles.album} onClick={() => onAlbumClick(index)} key={`album_${index}`}>
            <div className={styles.albumInfo}>
              <span>{artist}</span>
              <span>{title}</span>
            </div>
            <img
              className={classNames([styles.albumArt, openIndex === index && styles.open])}
              onKeyDown={event => onAlbumKeyDown(event, index)}
              tabIndex={0}
              alt={`${title} by ${artist}`}
              loading="lazy"
              src={src}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Music;
