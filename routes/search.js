var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/search', function(req, res, next) {
  res.render('search', { title: 'Search Page' });
});

module.exports = router;
