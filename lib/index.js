var debug = require('debug')('metalsmith-timer');

function metalsmithTimer(string) {
  return function (files, metalsmith, done) {
    debug(string);
    done();
  };
}

module.exports = metalsmithTimer;