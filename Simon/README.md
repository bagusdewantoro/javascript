## Setup for this project

```
npm init
```

`package.json` settings for .js files inside subdirectories:
```
"scripts": {
  "1": "node src/d01ArrayTask.js",
  "test": "echo \"Error: no test specified\" && exit 1"
},
```

Then, run:

  `npm run 1`

is equal to do this in powershell:

  `node src/d01ArrayTask.js`


## Install Jest
https://jestjs.io/docs/getting-started

### Locally
```
npm install --save-dev jest
```
Add the following section to your package.json:
```
{
  "scripts": {
    "test": "jest"
  }
}
```
Create file `filename.test.js`
Then, run this:
```
npm run test
```

### Global
```
npm install jest --global
```
Add the following section to your package.json:

Create file `filename.test.js`
Then, run this:
```
jest filename.test
```
