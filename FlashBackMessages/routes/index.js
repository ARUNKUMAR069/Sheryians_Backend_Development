var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


router.get('/login', function(req, res, next) {
// Agar login ho jao to  sidha profile page pe chale jao
// agar login nahi ho to mujhe is route se kisi aur roite lejao jaise ki /error waha par dikhao failed
// so flash messages allow you that the data inside this route you can use in another route
  res.render('index');
});

router.get('/failed', function(req, res, next) {
  // req.flash("name","data")
  req.flash("loginError","Login Failed");
  res.send('bangyea')
  
});

router.get('/check', function(req, res, next) {
  // req.flash("name","data")
  console.log(req.flash("loginError"));
  res.send(req.flash("loginError"));
});
module.exports = router;
