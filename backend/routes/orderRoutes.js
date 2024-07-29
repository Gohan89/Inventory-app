const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

router.post('/', authMiddleware, roleMiddleware(['emp', 'admin']), orderController.placeOrder);

module.exports = router;

