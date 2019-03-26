const express = require('express');
const router = express.Router();
const itemController = require('../controllers/items.controller');
const checkAuth = require('../middleware/checkAuth');

router.get('/items/:itemId', itemController.getItem);
router.get('/items', itemController.getItems);
router.post('/items', [checkAuth], itemController.addItem);
router.put('/items/:itemId', [checkAuth], itemController.updateItem);
router.delete('/items/:itemId', [checkAuth], itemController.deleteItem);

module.exports = router;