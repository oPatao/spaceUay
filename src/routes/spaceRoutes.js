const express = require('express');

const router = express.Router();

const { indexView, editorialView, registroView, loginView } = require('../controllers/viewsController.js');
const loginController = require('../controllers/loginController.js');

router.get('/', indexView);
router.get('/editorial', editorialView);

router.get('/cadastro', registroView);
router.post('/cadastro', loginController.registro);

router.get('/login', loginView);
router.post('/login', loginController.login);

module.exports = router;