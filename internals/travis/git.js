const { register } = require('../utils/git');
const { username, email, token } = require('../utils/params');

register(username, email, token);
