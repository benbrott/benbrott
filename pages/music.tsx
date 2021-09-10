import React, { KeyboardEvent, useCallback, useState } from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import styles from 'styles/music.module.scss';
import Dropdown from 'components/dropdown';
import KEY_EVENTS from 'utils/events';
import classNames from 'utils/classNames';
import { getAccessToken, getUniqueAlbums, getTopTracks, Album } from 'utils/spotifyHttpClient';

type MusicProps = {
  topAlbums: Album[];
  duration: Duration;
};

type Duration = 'short' | 'medium' | 'long';

const durationLabels = {
  short: 'weeks',
  medium: 'months',
  long: 'years'
};

const Music = ({ topAlbums, duration = 'medium' }: MusicProps) => {
  const router = useRouter();
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
    router.push(`${router.pathname}?duration=${duration}`);
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
              <img
                className={classNames([styles.albumArt, openIndex === index && styles.open])}
                onKeyDown={event => onAlbumKeyDown(event, index)}
                tabIndex={0}
                alt={`${name} by ${artist}`}
                loading="lazy"
                src={images[0].url}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { SPOTIFY_REFRESH_TOKEN, SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } = process.env;

  const durationQuery = Array.isArray(query.duration) ? query.duration[0] : query.duration;
  const durationValue = durationQuery || 'medium';
  const duration = ['short', 'medium', 'long'].includes(durationValue) ? durationValue : 'medium';

  if (SPOTIFY_REFRESH_TOKEN && SPOTIFY_CLIENT_ID && SPOTIFY_CLIENT_SECRET) {
    const accessToken = await getAccessToken(SPOTIFY_REFRESH_TOKEN, SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET);
    const topTracks = await getTopTracks(accessToken, duration);
    const topAlbums = getUniqueAlbums(topTracks);
    return { props: { topAlbums, duration } };
  }
  return { props: { topAlbums: [], duration } };
};

export default Music;
