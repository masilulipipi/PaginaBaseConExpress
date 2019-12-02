// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

/* GET - home page. */
router.get('/', mainController.root);
/* GET - login page. */
router.get('/login', mainController.login);
/* GET - register page. */
router.get('/register', mainController.register);

module.exports = router;
