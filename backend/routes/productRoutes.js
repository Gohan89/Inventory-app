const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

router.get('/', authMiddleware, productController.getProducts);
router.post('/', authMiddleware, roleMiddleware(['admin']), productController.addProduct);

module.exports = router;

