const express = require('express');

const feedController = require('../controllers/post.controller');

const router = express.Router();

router.get('/', feedController.getPosts);
router.post('/', feedController.createPost);

module.exports = router;