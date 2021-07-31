```sh
npm i -g flow
npm init
npm install --save-dev @babel/core @babel/cli @babel/preset-flow
./node_modules/.bin/babel src/ -d lib/
```

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

```sh
npm run flow init
npm run flow
```

```sh
npm install -g flow-typed
flow-typed install jest@27.0.6
```

Inside `.flowconfig` :
```sh
[libs]
flow-typed
```

```
{
  "name": ...
  ...

  "scripts": {
    ...

    "flow": "flow"
  },
  ...

  "devDependencies": {
    ...

    "flow-bin": "^0.156.0",
    "babel-preset-env": "^1.6.1",
    "jest": "^27.0.6"
  },
  "jest": {
    "verbose": true,
    "testURL": "http://localhost:1234/"
  }
}
```
