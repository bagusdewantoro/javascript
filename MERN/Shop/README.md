
Concurrent:
```
npm i concurrently
```
Add scripts to package.json:
```
"scripts": {
    "start": "node index.js",
    "server": "nodemon index.js",
    "client": "npm run start --prefix client",
    "dev": "concurrently -k \"npm run server\" \"npm run client\""
  },
```
And then run:
```
npm run dev
```
