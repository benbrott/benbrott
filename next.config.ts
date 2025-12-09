import path from 'path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://i.scdn.co/**')]
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack']
      }
    }
  }
};

export default nextConfig;
