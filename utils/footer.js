const { cyan } = require('chalk');
const io = require('console-read-write');
const pkg = require('../package.json');

module.exports = () => {
    io.write(cyan(`\nThank you for using ${pkg.name}!\n`));
    io.write(cyan('Please star (⭐️) the repo: https://github.com/msaaddev/password-gen-cli/\n'));
};
