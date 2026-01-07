#!/usr/bin/env node

function getNameArg() {
  const args = process.argv.slice(2);

  // --name=Alice
  const eqArg = args.find(arg => arg.startsWith('--name='));
  if (eqArg) {
    return eqArg.split('=')[1];
  }

  // --name Alice
  const nameIndex = args.indexOf('--name');
  if (nameIndex !== -1 && args[nameIndex + 1]) {
    return args[nameIndex + 1];
  }

  return null;
}

const name = getNameArg();

require('../src/index')(name);
