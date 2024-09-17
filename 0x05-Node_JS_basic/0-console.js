const { stdout } = require('process')

function displayMessage(message) {
  stdout.write(message);
}

module.exports = displayMessage;