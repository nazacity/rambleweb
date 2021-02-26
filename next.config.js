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
    SERVER_API_HOST: process.env.SERVER_API_HOST || 'http://localhost:5000',
    SOCIAL_API: process.env.SOCIAL_API || 'http://localhost:5100',
    LINE_CLIENT_KEY: process.env.LINE_CLIENT_KEY,
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
