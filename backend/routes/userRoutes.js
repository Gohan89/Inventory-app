const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

router.get('/', authMiddleware, roleMiddleware(['admin']), userController.getUsers);
router.post('/', authMiddleware, roleMiddleware(['admin']), userController.addUser);
router.delete('/:id', authMiddleware, roleMiddleware(['admin']), userController.removeUser);

module.exports = router;

