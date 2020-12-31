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
