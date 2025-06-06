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

module.exports = {
  indexView,
  editorialView,
  loginView,
  registroView
};
