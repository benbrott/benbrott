export type Artist = {
  name: string;
};

export type AlbumImage = {
  url: string;
};

export type Album = {
  id: string;
  name: string;
  artists: Artist[];
  images: AlbumImage[];
};

export type Track = {
  name: string;
  album: Album;
  artists: Artist[];
};
