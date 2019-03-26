const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/comments.controller');
const checkAuth = require('../middleware/checkAuth');

router.get('/items/:itemId/comments', commentsController.getComments);
router.post('/items/:itemId/comments', [checkAuth], commentsController.addComment);

module.exports = router;