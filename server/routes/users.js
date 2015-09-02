

var express = require('express');
var router = express.Router();





router.get('/name', function(req, res, next){
    res.json(req.user);
});


router.get('/', function(req, res, next) {
    res.json(req.isAuthenticated());
});
module.exports = router;