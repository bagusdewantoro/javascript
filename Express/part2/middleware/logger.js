const moment = require('moment');

const logger = (req, res, next) => {
  console.log(`bagus got request from ${
    req.protocol}://${req.get('host')}${
    req.originalUrl} at: ${
    moment().format()}`
  );
  next();
};

module.exports = logger;
