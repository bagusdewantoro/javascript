## Install webpack & webpack-cli

```
npm init
```

```
npm install webpack webpack-cli --save-dev
```

* Inside package.json, erase:
```
"main": "index.js",
```
add:
```
"private": true,
```

* Create file webpack.config.js.
Put this inside:
```
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    // if you would put other js file to be imported to index.js, for example print.js :
    // print: './src/print.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};
```

* Create directory "./src". Make new file index.js.

* Create directory "./dist". Make new file index.html.

* Inside html body, put this:
```
<script src="index.bundle.js"></script>
```

* package.json
```
"build": "webpack"
```

* Test
```
npm run build
```

## Install webpack-dev-server

```
npm install --save-dev webpack-dev-server
```
* Add to webpack.config.js:
```
module.exports = {
  ...
  devServer: {
    static: './dist',
  },
}

```

* package.json :
```
scripts: {
  ...
  "start": "webpack serve --open"
}
```

* Run development development server
```
npm start
```
