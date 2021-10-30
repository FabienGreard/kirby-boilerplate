require('dotenv').config();

module.exports = {
  client: {
    service: {
      url: process.env.GRAPHQL_ENDPOINT,
    },
    includes: ['apollo/operations/**/*.ts'],
    excludes: ['**/__tests__/**/*', '**/node_modules/**/*'],
  },
};
