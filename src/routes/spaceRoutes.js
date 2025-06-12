const express = require('express');

const router = express.Router();

const { indexView, editorialView, registroView, loginView,loginSuccessView, cadastroSuccessView, catalogoView } = require('../controllers/viewsController.js');
const loginController = require('../controllers/loginController.js');
const anuncioController = require('../controllers/anuncioController.js');
const carrinhoController = require('../controllers/carrinhoController.js');


router.get('/', indexView);
router.get('/editorial', editorialView);

router.get('/cadastro', registroView);
router.post('/cadastro', loginController.registro);

router.get('/login', loginView);
router.post('/login', loginController.login);

router.get('/loginSucesso', loginSuccessView);

router.get('/cadastroSucesso', cadastroSuccessView);

router.get('/anuncio', anuncioController.anuncioView);
router.post('/anuncio', anuncioController.createAnuncio);

router.get('/catalogo', catalogoView);

router.post('/carrinho/adicionar', carrinhoController.adicionarAoCarrinho);
router.post('/carrinho/remover', carrinhoController.removerDoCarrinho);
router.get('/carrinho/itens', carrinhoController.listarCarrinho);
router.get('/carrinho', carrinhoController.carrinhoView);

module.exports = router;