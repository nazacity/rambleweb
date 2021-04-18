require('dotenv').config();

// module.exports = {
//   serverRuntimeConfig: {
//     backendAPIHost:
//       process.env.SERVER_API_HOST || 'https://api.ramble-club.com',
//   },
// };

const withPlugins = require('next-compose-plugins');
const withOptimizedImages = require('next-optimized-images');
const withFonts = require('next-fonts');

const nextConfig = {
  // distDir: '../../dist/functions/next'
  serverRuntimeConfig: {
    backendAPIHost:
      process.env.SERVER_API_HOST || 'https://api.ramble-club.com',
  },
  env: {
    SERVER_API_HOST:
      process.env.SERVER_API_HOST || 'https://api.ramble-club.com',
    SOCIAL_API: process.env.SOCIAL_API || 'https://social.ramble-club.com',
    LINE_CLIENT_KEY: process.env.LINE_CLIENT_KEY || '1655591354',
  },
};

module.exports = withPlugins(
  [
    [
      withOptimizedImages,
      {
        mozjpeg: {
          quality: 90,
        },
        webp: {
          preset: 'default',
          quality: 90,
        },
      },
    ],
    withFonts,
  ],
  nextConfig
);
