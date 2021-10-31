var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// challenge
router.get('/cool', (req, res, next) => {
  res.send('cool challenge');
})

module.exports = router;
