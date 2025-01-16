var express = require('express');
var router = express.Router();
const UserModel = require('./users');
const localStrategy = require('passport-local');
const passport = require('passport');

// Passport JS code
passport.use(new localStrategy(UserModel.authenticate()));
// Passport JS code end

// Routes for PassportAuth 

// 1. Register Route
router.post('/register', function (req, res) {
  var userdata = new UserModel({


    username: req.body.username,
    secret: req.body.secret
  });



  UserModel.register(userdata, req.body.password)
    .then(function (registereduser) {

      passport.authenticate('local')(req, res, function () {
        res.redirect('/profile');
      })
    })

})
// 2. Login Route

router.post('/login', passport.authenticate('local', {
  successRedirect: '/profile',
  failureRedirect: '/login'
}), function (req, res) { })



// 3. Logout Route
router.get('/logout', function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
})

//  Is Logged In Middleware

function isLoggedIn(req, res, next) {

if(req.isAuthenticated()){
  return next();
}

res.redirect('/login');

}


// Profile Route
router.get('/profile',isLoggedIn ,function(req,res){
  res.render('profile');
})













/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
