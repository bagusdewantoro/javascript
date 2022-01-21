
# HEROKU DEPLOYMENT (SERVER)
---
## Preparation
* Move secret code, key, etc to .env
```
npm i dotenv
```
* In main js file (i.e. index.js):
```
require('dotenv/config');
```
Or if "type": "module"
```
import dotenv from 'dotenv';
dotenv.config();
```
* Create .env file
```
mongoDB = "mongoDB uri here"
```
* Change hardcoded mongoDB URI & PORT in index.js to process.env.mongoDB
```
const cloudDB = process.env.mongoDB;
const PORT = process.env.PORT || 5000;
mongoose.connect(cloudDB)
  .then(() => app.listen(PORT, () => console.log(`listening on ${PORT}`)))
  .catch((error) => console.log(error.message));
```
* Declare engines in package.json
```
"engines": {
  "node": "14.x",
  "npm": "6.14.15"
}
```
---
## Deployment
* In server directory, create Procfile file (no extention). Put this text inside
```
web: node index.js
```
* Install heroku
* Login to heroku using powershell or cmd
```
heroku login -i
```
* Push local repo to github
```
git branch -M main
git add .
git commit -am 'first'
git remote add origin https://github.com/bagusdewantoro/merngallery.git
git push origin main
```
* Create heroku app
```
heroku create bagusgallery
```
* Open https://bagusgallery.herokuapp.com/ in your browser
* Check which remote is added
```
git remote -v
```
* Push to heroku
```
git push heroku main
```
* Check status & dynos
```
heroku ps:scale web=1
```
* Add config to heroku
```
heroku config:set mongoDB="paste mongoDB URI here"
```
* View current heroku config
```
heroku config
```
* Remove a heroku config (just example)
```
heroku config:unset EXAMPLE
```
* Open
```
heroku open
```
* Check error
```
heroku logs --tail
```
* Open https://bagusgallery.herokuapp.com/posts to check API
---
---

# NETLIFY DEPLOYMENT (CLIENT)
---
* In App.js, change apiUrl for fetch to heroku server
```
const apiUrl = "https://bagusgallery.herokuapp.com/posts"
```
