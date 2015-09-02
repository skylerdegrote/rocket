var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');




router.post('/', passport.authenticate('local', {
    successRedirect: '../views/index.html',
    failureRedirect: '/'
}));

router.get("/*", function(req, res, next){
    var file = req.params[0] || "views/login.html";
    res.sendFile(path.join(__dirname, "../public", file));
});

module.exports = router;











