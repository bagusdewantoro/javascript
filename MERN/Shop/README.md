
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
    "devClient": "concurrently -k \"npm run server\" \"npm run client\""
  },
```
And then run:
```
npm run devClient
```

Also add similar codes for admin and also run as devAdmin

username: admin
pass: 1234
