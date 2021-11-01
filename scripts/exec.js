const { spawn, exec } = require('child_process');
const os = require('os');

module.exports = (command, { capture = false, echo = false } = {}) => {
  if (echo) {
    console.log(command);
  }

  const childProcess =
    os.platform() === 'win32' ? exec(command) : spawn('bash', ['-c', command], { stdio: capture ? 'pipe' : 'inherit' });

  return new Promise((resolve, reject) => {
    let stdout = '';

    if (capture) {
      childProcess.stdout.on('data', data => {
        stdout += data;
      });
    }

    childProcess.on('error', error => reject(new Error({ code: 1, error })));

    childProcess.on('close', code =>
      code > 0
        ? reject(new Error({ code, error: `Command failed with code ${code}` }))
        : resolve({ code, data: stdout }),
    );
  });
};
