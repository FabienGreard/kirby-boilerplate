#!/usr/bin/env node
import meow from 'meow';
import chalk from 'chalk';
import { createApp } from './create-app';

const cli = meow(
  `
	Usage
	  $ create-kirby-app ${chalk.green('<project-directory>')} [options]

    Options:
      -V, --version  output the version number                          
      -h, --help     output usage information
`,
  {
    importMeta: import.meta,
    flags: {
      help: {
        type: 'boolean',
        default: false,
        alias: 'h',
      },
      version: {
        type: 'boolean',
        default: false,
        alias: 'v',
      },
    },
  },
);

createApp(cli.input[0]);
