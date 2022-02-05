import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

// MODELS ===============================
const postSchema = mongoose.Schema({
  title: String,
  message: String,
  selectedFile: String,
  like: {type: Number, default: 0},
  test: String,
  createdAt: {type: Date, default: new Date()},
  postNumber: Number
});
const PostMessage = mongoose.model('Local', postSchema);

// CONTROLLERS ===========================
const getPosts = async (req, res) => {
  try {
    const post = await PostMessage.find();
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
};
const createPost = async (req, res) => {
  const newPost = new PostMessage(req.body);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
};
const updatePost = async (req, res) => {
  const { id } = req.params;
  const post = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send('No post with this ID');
  }
  const updatedPost = await PostMessage.findByIdAndUpdate(id, post, { new: true });
  res.json(updatedPost);
}

const deletePost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send('No post with this ID');
  }
  const deletedPost = await PostMessage.findByIdAndDelete(id);
  res.json(deletedPost);
}

const likePost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send('No post with this ID');
  }
  const post = await PostMessage.findById(id);
  const updatedPost = await PostMessage.findByIdAndUpdate(id, { like: post.like + 1}, { new: true })
  res.json(updatedPost)
}

// ROUTES ===========================
const router = express.Router();
router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

// MIDDLEWARE ========================
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
app.use('/posts', router);

// PORT, DB CLOUD ==========================
const cloudDB = 'mongodb+srv://netninja:test1234@nodetuts.y6vzw.mongodb.net/gallery?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(cloudDB)
  .then(() => app.listen(PORT, () => console.log(`sukses di port ${PORT}`)))
  .catch((error) => console.log(error.message));

export default app;
