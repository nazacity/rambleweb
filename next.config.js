require('dotenv').config();

module.exports = {
  serverRuntimeConfig: {
    backendAPIHost: process.env.SERVER_API_HOST || 'http://128.199.137.3:5001',
  },
};
