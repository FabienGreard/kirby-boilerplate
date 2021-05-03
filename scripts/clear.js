const { join } = require('path');
const exec = require('./exec');

(async () => {
  console.log('--- CLEAR ---');
  await Promise.all([
    exec(`rm -rf ${join(__dirname, '/../node_modules')}`),
    exec(`rm -rf ${join(__dirname, '/../*lock*')}`),
  ]);
  console.log('--- DONE ---');
})();
