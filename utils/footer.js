const { cyan, dim } = require('chalk');
const io = require('console-read-write');
const pkg = require('../package.json');

module.exports = () => {
    io.write(dim(cyan('\n Star ⭐️ the repo: https://github.com/msaaddev/password-gen-cli/')));
    io.write(dim(cyan(' Connect with me: https://twitter.com/MSaaddev/\n')));
};
