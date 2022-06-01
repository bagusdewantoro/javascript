const router = require('express').Router();
const User = require('../models/User');
const CryptoJS = require('crypto-js'); // password encryption
const jwt = require('jsonwebtoken');


// REGISTER
router.post('/register', async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    // encrypt password
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
  });
  try {
    const savedUser = await newUser.save()
    res.status(201).json(savedUser);
  } catch(err) {
    res.status(500).json(err);
  }
});

// LOGIN
router.post('/login', async(req, res) => {
  try {
    const user = await User.findOne({username: req.body.username});
    if (!user) {
      res.status(401).json('Wrong credentials');
    }
    // decrypt password from DB
    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );
    const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
    // console.log(OriginalPassword, typeof OriginalPassword)
    // console.log(req.body.password, typeof req.body.password)
    // if decrypted password retrieved from DB !== our request in the post body
    if (OriginalPassword !== req.body.password) {
      res.status(401).json('Wrong credentials');
    }
    // retrieve user data without password
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch {
    res.status(500).json(err);
  }
})

module.exports = router;
