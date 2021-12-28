import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser'

const app = express();
import dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT || 5000;

// MODELS ===============================
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  photo: String,
  birthdate: String
});
const User = mongoose.model('User', userSchema);

// ROUTES =================================
const router = express.Router();
import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images');
  },
  filename: (req, file, cb) => {
    cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

let upload = multer({ storage, fileFilter });

router.route('/add').post(upload.single('photo'), (req, res) => {
  const name = req.body.name;
  const birthdate = req.body.birthdate;
  const photo = req.file.filename;
  const newUserData = {
    name,
    birthdate,
    photo
  };
  const newUser = new User(newUserData);
  newUser.save()
    .then(() => res.json('UserAdded'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/rec').get((req, res) => {
  User.find()
    .then(user => res.json(user))
    .catch(err => rest.status(400).json('Error:' + err));
});

// MIDDLEWARE ===========================
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use('/users', router);

// PORT, DB CLOUD ==========================
const cloudDB = 'mongodb+srv://netninja:test1234@nodetuts.y6vzw.mongodb.net/file-multer?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(cloudDB)
  .then(() => app.listen(PORT, () => console.log(`sukses di port ${PORT}`)))
  .catch((error) => console.log(error.message));


export default app;
