const env = require('./env');
module.exports = templateString => eval(`\`${templateString}\`;`);
