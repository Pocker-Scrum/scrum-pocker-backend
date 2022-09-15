var express = require('express');
var router = express.Router();
var messagingController = require('../controllers/messaging.controller')

/* GET messages listing. */
router.get('/',messagingController.get)
// router.get('/message', function(req, res, next) {
//   messagingController.get()
// });

module.exports = router;
