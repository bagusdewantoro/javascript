## Setup Compiler

```sh
npm i -g flow
npm init
npm install --save-dev @babel/core @babel/cli @babel/preset-flow
```

> Create a .babelrc file at the root of your project, then add this:

```
{
  "presets": ["@babel/preset-flow"]
}
```

```
./node_modules/.bin/babel src/ -d lib/
```

> Add this to package.json :

```
{
  "name": ...
  ...

  "scripts": {
    "build": "babel src/ -d lib/",
    "prepublish": "npm run build"
  }
}
```

## Setup Flow

```
npm install --save-dev flow-bin
```

> Add "flow" script to package.json

```sh
{
  ...

  "scripts": {
    "flow": "flow"
  }
}
```

> Run Flow

```sh
npm run flow init
npm run flow
```

## Setup flow-typed & jest

```sh
npm install -g flow-typed
flow-typed install jest@27.0.6
```

> Inside `.flowconfig` :

```sh
[libs]
flow-typed
```

> Add this to package.json :

```
{
  "name": ...
  ...

  "devDependencies": {
    ...

    "babel-preset-env": "^1.6.1",
  },
  "jest": {
    "verbose": true,
    "testURL": "http://localhost:1234/"
  }
}
```

> Add this to the .babelrc files
```
{
  ...

  "env": {
    "test": {
      "presets": ["env"]
    }
  }
}
```

> Create `src` directory at the root of your project

```
npm install
```
