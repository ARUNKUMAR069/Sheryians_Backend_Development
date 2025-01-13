var express = require('express');
var router = express.Router();






/* GET home page. */
router.get('/', function(req, res, next) {
  req.session.username="Arun";
  req.session.ban=true;
  // req.session.Session_name="Arun";
  res.render('index', { title: 'Express' });
});

router.get('/checkban', function(req, res) {
console.log(req.session);
res.send("Console dekho")
})

router.get('/dashboard', function(req, res) {
  if(req.session.ban===true){
    res.send("You are banned")
  }
  res.send("You are not banned")
  })

module.exports = router;
