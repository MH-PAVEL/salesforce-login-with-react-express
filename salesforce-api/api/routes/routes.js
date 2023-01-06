const express = require('express');
const router = express.Router();
const indexController = require('./../controllers/index');
const loginController = require('./../controllers/loginController');
router.get('/', indexController.get);
router.post('/auth/login', loginController.login);
router.get('/login', loginController.login1);
router.get('/auth/callback', loginController.loginCallBack);

module.exports = router;
