#!/usr/bin/env node

/**
 *
 * Author: Saad Irfan
 * GitHub: msaaddev
 * Twitter: https://twitter.com/msaaddev
 */

// importing files & packages

import header from './utils/header.js';
import cli from './utils/cli.js';
import footer from './utils/footer.js';
import clear from 'clear';

export default async () => {
	clear();
	header();
	await cli();
	footer();
};
