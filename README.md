# npx-demo

This repo is a very simple demo of how to implement NPX functionality within an NPM package.

## Test it out

Hello world:

`npx @gld5000-cli/npx-demo`

Hello user (passing a variable):

`npx @gld5000-cli/npx-demo --name "your user name"`

## Create your own

- ### Create a repo
  E.G. npx-demo
- ### Create a package.json
  Use `npm init`:

```
npm init
```

Add bin:

```
  "bin": {
    "npx-demo": "./bin/npxDemo.js"
  },
```

Or:

```
  "bin": "./bin/npxDemo.js",
```

Add files:

```
  "files": [
    "bin",
    "src"
  ],
```

- ### Create a function

```
  mkdir src
  touch src/index.js

```

```src/index.js
module.exports = function run(name) {
  if (name) {
    console.log(`Hello, ${name}`);
  } else {
    console.log('Hello World');
  }
};
```

- ### Create a bin

```
mkdir bin
touch bin/npxDemo.js
```

```bin/npxDemo.js
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

```

- ### Make the bin file executable across operating systems

```
chmod +x bin/npxDemo.js
```

- ### Test it out (locally)

```
npx .
```

- ### Publish your NPM package

```
npm publish --access public
```

- ### Test it out (from a different repo)

```
npx @gld5000-cli/npx-demo
npx @gld5000-cli/npx-demo --name "Bobby Digital"

```
