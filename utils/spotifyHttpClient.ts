import type { Album, Track } from '@/types/music';

export const getAccessToken = async (refreshToken: string, clientId: string, clientSecret: string) => {
  const tokenRequestBody = new URLSearchParams();
  tokenRequestBody.append('grant_type', 'refresh_token');
  tokenRequestBody.append('refresh_token', refreshToken);
  tokenRequestBody.append('client_id', clientId);
  tokenRequestBody.append('client_secret', clientSecret);
  const accessToken = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: tokenRequestBody
  })
    .then(res => {
      return res
        .json()
        .then(async tokenInfo => tokenInfo['access_token'])
        .catch(error => {
          console.error('Error parsing JSON after fetching token from Spotify:', error);
          return '';
        });
    })
    .catch(error => {
      console.error('Error fetching token from Spotify:', error);
      return '';
    });
  return accessToken as string;
};

export const getTopTracks = async (accessToken: string, duration: string = 'medium') => {
  const getTop50Tracks = async (offset: number) => {
    return await fetch(
      `https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=${duration}_term&offset=${offset}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }
    )
      .then(res => {
        return res
          .json()
          .then(topTracksResponse => topTracksResponse.items)
          .catch(error => {
            console.error('Error parsing JSON after fetching top tracks from Spotify:', error);
            return [];
          });
      })
      .catch(error => {
        console.error('Error fetching top tracks from Spotify:', error);
        return [];
      });
  };

  const top50Tracks = await getTop50Tracks(0);
  const next49Tracks = await getTop50Tracks(49);
  next49Tracks.shift(); // Spotify will only return the top 99 tracks right now

  return [...top50Tracks, ...next49Tracks] as Track[];
};

export const getUniqueAlbums = (topTracks: Track[]) => {
  const topAlbums: Album[] = [];
  const foundIds: string[] = [];
  topTracks.forEach(track => {
    const albumId = track.album.id;
    if (!foundIds.includes(albumId)) {
      foundIds.push(albumId);
      topAlbums.push(track.album);
    }
  });
  return topAlbums;
};
