/* eslint-disable no-console */
const { join } = require('path');
const exec = require('./exec');

(async () => {
  console.log('--- CLEAR ---');
  await Promise.all([
    exec('rm', ['-rf', `${join(__dirname, '/../node_modules')}`], { echo: true }),
    exec('rm', ['-rf', `${join(__dirname, '/../*lock*')}`], { echo: true }),
    exec('rm', ['-rf', `${join(__dirname, '/.next')}`], { echo: true }),
  ]);
  console.log('--- DONE ---');
})();
