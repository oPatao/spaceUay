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

module.exports = {
  indexView,
  editorialView,
  loginView,
  registroView,
  loginSuccessView,
  cadastroSuccessView
};
