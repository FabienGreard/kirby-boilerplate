/* eslint-disable no-console */
const { spawn } = require('child_process');

module.exports = (command, args, { capture = false, echo = false } = {}) => {
  if (echo) console.log(command, ...args);

  const childProcess = spawn(command, args, { stdio: capture ? 'pipe' : 'inherit' });

  return new Promise((resolve, reject) => {
    let stdout = '';

    if (capture)
      childProcess.stdout.on('data', data => {
        stdout += data;
      });

    childProcess.on('error', error => reject(new Error(error)));

    childProcess.on('close', code =>
      code > 0
        ? reject(new Error({ code, error: `Command failed with code ${code}` }))
        : resolve({ code, data: stdout }),
    );
  });
};
