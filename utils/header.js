// importing packages

const { bgBlue } = require('chalk');
const io = require('console-read-write');
const pkg = require('../package.json');

module.exports = () =>
	io.write(bgBlue(`\n ${pkg.name} v${pkg.version} by ${pkg.author.name} `));
