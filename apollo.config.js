module.exports = {
  client: {
    service: 'apollo',
    localSchemaFile: '.graphql-schema.json',
    includes: ['apollo/operations/**/*.ts'],
    excludes: ['**/__tests__/**/*', '**/node_modules/**/*'],
  },
};
