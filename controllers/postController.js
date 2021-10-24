const Post = require('../models/post');

exports.getPosts = (req, res, next) => {
  res.status(200).json({
    message: 'first post'
  });
};

exports.createPost = (req, res, next) => {
  const create = () => {
    if (req.body instanceof Array) {
      return Post.bulkCreate(req.body);
    } else {
      return Post.create(req.body);
    }
  };

  create().then(result => {
    console.log(result);
    res.status(201).json({
      message: 'post created successfully!',
      data: result
    });
  }).catch(err => {
    res.status(500).json({
      message: 'failed to store data',
      data: err
    });
  });
};