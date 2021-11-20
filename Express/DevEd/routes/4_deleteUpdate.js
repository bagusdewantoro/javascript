const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', async (req, res) => {
  try {
    const post = await Post.find();
    res.json(post);
  } catch (err) {
    res.json({message: err});
  }
});

router.post('/', async (req, res) => {
  // console.log(req.body);
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({message: err});
  }
});

// Specific post
router.get('/:postId', async (req, res) => {
  // console.log(req.params.postId);
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({message: err});
  }
});

// Delete post
router.delete('/:postId', async (req, res) => {
  try {
    const removedPost = await Post.deleteOne({_id: req.params.postId});
    res.json(removedPost);
  } catch (err) {
    res.json({message: err});
  }
});

// Update post
router.patch('/:postId', async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      {_id: req.params.postId},
      { $set: {
        title: req.body.title,
        description: req.body.description
      }
    });
    res.json(updatedPost);
  } catch (err) {
    res.json({message: err});
  }
});


module.exports = router;
