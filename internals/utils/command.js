const { exec, execSync } = require('child_process');

const commandExec = (command, fn) => {
  exec(command, (error, result) => {
    if (error) {
      console.error(error);
      process.exit(1);
      return;
    }

    fn(result);
  });
};

const commandExecSync = command => {
  return execSync(command).toString();
};

module.exports = {
  command: commandExec,
  commandSync: commandExecSync,
};
