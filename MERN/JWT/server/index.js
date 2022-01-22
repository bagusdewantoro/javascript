import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

const app = express();
const router = express.Router();

// MIDDLEWARE
app.use(cors())
app.use(express.json())
app.use('/', router)

// MODELS ===============================
const User = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  quote: String
});
const model = mongoose.model('UserData', User);

// CONTROLLERS ===============================
const register = async (req, res) => {
  console.log(req.body);
  try {
    const user = await model.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    })
    res.json({ status: 'ok' })
  } catch (err) {
    console.log(err);
  }
}
const login = async (req, res) => {
  const user = await model.findOne({
    email: req.body.email,
    password: req.body.password
  })
  if (user) {
    const token = jwt.sign({
      name: user.name,
      email: user.email,
    }, 'secret123')
    return res.json({ status: 'ok', user: token })
  } else {
    return res.json({ status: 'error', user: false })
  }
}
const loginGet = async (req, res) => {
  const token = req.headers['x-access-token'];
  try {
    const decoded = jwt.verify(token, 'secret123');
    const email = decoded.email
  } catch (error) {
    console.log(error)
    res.json({ status: 'error', error: 'invalid token' })
  }
}
const quoteGet = async (req, res) => {
  const token = req.headers['x-access-token'];
  try {
    const decoded = jwt.verify(token, 'secret123');
    const email = decoded.email;
    const user = await model.findOne({ email: email })
    return res.json({ status: 'ok', quote: user.quote })
  } catch (error) {
    console.log(error)
    res.json({ status: 'error', error: 'invalid token' })
  }
}
const quote = async (req, res) => {
  const token = req.headers['x-access-token'];
  try {
    const decoded = jwt.verify(token, 'secret123');
    const email = decoded.email;
    await model.updateOne(
      { email: email },
      { $set: { quote: req.body.quote }}
    )
    return res.json({ status: 'ok' })
  } catch (error) {
    console.log(error)
    res.json({ status: 'error', error: 'invalid token' })
  }
}

// ROUTES ===============================
router.post('/api/register', register);
router.post('/api/login', login);
router.get('/api/login', loginGet);
router.post('/api/quote', quote);
router.get('/api/quote', quoteGet);

// PORT ===============================
const PORT = process.env.PORT || 1337;
const mongoDB = 'mongodb+srv://netninja:test1234@nodetuts.y6vzw.mongodb.net/auth?retryWrites=true&w=majority';

mongoose.connect(mongoDB, () => app.listen(PORT, () => console.log(`sukses di PORT ${PORT} dan mongoDB`)));
