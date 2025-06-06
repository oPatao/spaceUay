const express = require('express');

const router = express.Router();

const { indexView, editorialView } = require('../controllers/viewsController.js');

router.get('/', indexView);
router.get('/editorial', editorialView);

module.exports = router;