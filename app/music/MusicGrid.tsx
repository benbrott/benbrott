'use client';

import { KeyboardEvent, useCallback, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from '@/styles/music.module.scss';
import Dropdown from '@/components/Dropdown';
import KEY_EVENTS from '@/utils/events';
import classNames from '@/utils/classNames';
import { Album } from '@/types/music';

type MusicGridProps = {
  duration: Duration;
  topAlbums: Album[];
};

type Duration = 'short' | 'medium' | 'long';

const durationLabels = {
  short: 'weeks',
  medium: 'months',
  long: 'years'
};

const MusicGrid = ({ duration, topAlbums }: MusicGridProps) => {
  const router = useRouter();
  const pathname = usePathname();
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

  const onDurationSelect = (option: string) => {
    setOpenIndex(-1);
    const duration = Object.keys(durationLabels).find(key => durationLabels[key as Duration] === option);
    router.push(`${pathname}?duration=${duration}`);
  };

  return (
    <>
      <div className={styles.durationContainer}>
        <span>What I've been listening to the past few </span>
        <Dropdown
          options={Object.values(durationLabels)}
          value={durationLabels[duration]}
          onChange={onDurationSelect}
        />
      </div>
      <div className={styles.grid}>
        {topAlbums.map((album, index) => {
          const { name, artists, images } = album;
          const artist = artists[0].name;
          return (
            <div className={styles.album} onClick={() => onAlbumClick(index)} key={`album_${index}`}>
              <div className={styles.albumInfo}>
                <span>{artist}</span>
                <span>{name}</span>
              </div>
              <Image
                className={classNames([styles.albumArt, openIndex === index && styles.open])}
                onKeyDown={event => onAlbumKeyDown(event, index)}
                tabIndex={0}
                alt={`${name} by ${artist}`}
                loading="lazy"
                src={images[0].url}
                fill
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MusicGrid;
