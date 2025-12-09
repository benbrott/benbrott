import { ComponentProps } from 'react';
import MusicGrid from './MusicGrid';
import { getAccessToken, getUniqueAlbums, getTopTracks } from '@/utils/spotifyHttpClient';

type Duration = ComponentProps<typeof MusicGrid>['duration'];

const Music = async ({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) => {
  const { SPOTIFY_REFRESH_TOKEN, SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } = process.env;

  const durationParam = (await searchParams).duration;
  const durationValue = ((Array.isArray(durationParam) ? durationParam[0] : durationParam) as Duration) ?? 'medium';
  const duration = ['short', 'medium', 'long'].includes(durationValue) ? durationValue : 'medium';

  if (SPOTIFY_REFRESH_TOKEN && SPOTIFY_CLIENT_ID && SPOTIFY_CLIENT_SECRET) {
    const accessToken = await getAccessToken(SPOTIFY_REFRESH_TOKEN, SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET);
    const topTracks = await getTopTracks(accessToken, duration);
    const topAlbums = getUniqueAlbums(topTracks);

    return <MusicGrid duration={duration} topAlbums={topAlbums} />;
  }

  return <MusicGrid duration={duration} topAlbums={[]} />;
};

export default Music;
