const e = require("express");

function indexView(req, res) {
  res.render('index');
}

function editorialView(req, res) {
  res.render('editorial');
}

function loginView(req, res) {
  res.render('login');
}
function registroView(req, res) {
  res.render('cadastro');
}
function loginSuccessView(req, res) {
  res.render('loginSucesso');
  setTimeout(() => {
    res.redirect('/');
    }, 3000);
}
function cadastroSuccessView(req, res) {
  res.render('cadastroSucesso');
  setTimeout(() => {
    res.redirect('/');
    }, 3000);
}
function anuncioView(req, res) {
  res.render('anuncio');
}

function carrinhoView(req, res) {
  res.render('carrinho');
}  

async function catalogoView(req, res) {
  try {
    const anuncios = await Anuncio.findAll({
      include: [{
        model: require('../models/usuario').Usuario, // Import the Usuario model
        as: 'usuario' // Use the alias defined in the association
      }]
    });
    res.render('catalogo', { anuncios: anuncios }); // Pass the anuncios to the view
  } catch (error) {
    console.error('Erro ao buscar anúncios:', error);
    res.status(500).send('Erro ao carregar o catálogo');
  }
}



module.exports = {
  indexView,
  editorialView,
  loginView,
  registroView,
  loginSuccessView,
  cadastroSuccessView,
  anuncioView,
  catalogoView,
  carrinhoView
};
