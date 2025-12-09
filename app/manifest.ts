import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    short_name: 'benbrott',
    name: 'benbrott.com',
    description: 'Next.js App',
    start_url: '/',
    display: 'standalone',
    theme_color: '#b93b15',
    background_color: '#111',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon'
      }
    ]
  };
}
