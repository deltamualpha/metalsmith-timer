var debug = require('debug')('metalsmith-debug');

function metalsmithTimer(string) {
  return function (files, metalsmith, done) {
    debug(string);
    done();
  };
}

module.exports = metalsmithTimer;