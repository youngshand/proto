var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/age', function(req, res, next) {
  res.render('agegate', { title: 'Age Gate' });
});

module.exports = router;
