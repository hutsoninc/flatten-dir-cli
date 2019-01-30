#!/usr/bin/env node
'use strict';
const meow = require('meow');
const flatten = require('@hutsoninc/flatten-dir');

const cli = meow(`
	Usage
	  $ flatten <directory-to-flatten>
`);

const input = cli.input;

if (input.length === 0) {
    cli.showHelp();
    process.exit(0);
}

flatten(input[0]);
