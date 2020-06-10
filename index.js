#!/usr/bin/env node

/**
 *
 * Author: Saad Irfan
 * GitHub: msaaddev
 * Twitter: https://twitter.com/msaaddev
 */

// importing files & packages

const header = require('./utils/header');
const cli = require('./utils/cli');
const footer = require('./utils/footer');
const clear = require('clear');

(module.exports = async () => {
    clear();
    header();
    await cli();
    footer();
})();
