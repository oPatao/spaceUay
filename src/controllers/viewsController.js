const e = require("express");

function indexView(req, res) {
  res.render('index');
}

function editorialView(req, res) {
  res.render('editorial');
}

module.exports = {
  indexView,
  editorialView
};
