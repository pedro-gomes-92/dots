const nodeEnv = process.env.NODE_ENV;
if (!nodeEnv) {
  throw new Error('No environment defined!');
}

const autoParse = require('auto-parse');

const { version, name } = require('../../package');
const env = require('dotenv-flow').config({
  node_env: nodeEnv,
  path: 'variables',
}).parsed;

// Parse each variable
let parsedEnv = {};
Object.keys(env).forEach(name => {
  parsedEnv[name] = autoParse(env[name]);
});

module.exports = {
  ...parsedEnv,
  name,
  nodeEnv,
  version,
};
