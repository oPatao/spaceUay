const express = require('express');

const router = express.Router();

const { indexView, editorialView, registroView, loginView,loginSuccessView, cadastroSuccessView } = require('../controllers/viewsController.js');
const loginController = require('../controllers/loginController.js');

router.get('/', indexView);
router.get('/editorial', editorialView);

router.get('/cadastro', registroView);
router.post('/cadastro', loginController.registro);

router.get('/login', loginView);
router.post('/login', loginController.login);

router.get('/loginSucesso', loginSuccessView);

router.get('/cadastroSucesso', cadastroSuccessView);


module.exports = router;