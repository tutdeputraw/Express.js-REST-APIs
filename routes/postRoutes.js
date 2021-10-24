const express = require('express');

const feedController = require('../controllers/postController');

const router = express.Router();

router.get('/', feedController.getPosts);
router.post('/', feedController.createPost);

module.exports = router;