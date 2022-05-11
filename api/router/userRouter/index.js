const router = require('express').Router();
const userController = require('../../controllers/userController');
const { checkToken } = require('../../servises/authService');

router.post('/register', userController.newUser);
router.post('/login', userController.userLogin);
router.get('/me', checkToken, userController.getUserInfo);
router.get('/logout', checkToken, userController.logout);

module.exports = router;
