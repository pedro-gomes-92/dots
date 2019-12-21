import crypto from 'crypto';

global.crypto = global.crypto || {
  getRandomValues: function(buffer) {
    return crypto.randomFillSync(buffer);
  },
};
