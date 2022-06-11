const crypto = require('crypto');

function loginUseCase() {
  return crypto.randomBytes(8).toString('hex');
}

module.exports = { loginUseCase };
