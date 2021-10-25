const Post = require('../utils/database').post;

exports.getPosts = (req, res, next) => {
  Post.findAll()
    .then(result => {
      res.status(200).json(result);
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