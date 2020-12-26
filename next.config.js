require('dotenv').config();

module.exports = {
  serverRuntimeConfig: {
    backendAPIHost:
      process.env.SERVER_API_HOST || 'https://api.ramble-club.com',
  },
};
