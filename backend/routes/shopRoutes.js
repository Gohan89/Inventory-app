const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shopController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

router.get('/', authMiddleware, shopController.getShops);
router.post('/', authMiddleware, roleMiddleware(['admin']), shopController.addShop);
router.delete('/:id', authMiddleware, roleMiddleware(['admin']), shopController.removeShop);

module.exports = router;

