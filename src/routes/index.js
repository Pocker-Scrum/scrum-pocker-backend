var express = require('express');
var router = express.Router();

/* GET Test. */
router.get('/', function(req, res, next) {
  res.send('respond with a index');
});

module.exports = router;
