var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  // Create Cokkie
  res.cookie('name','Arun')
res.send(`Cookie Created  `);
});

router.get('/read', function(req, res) {
  // Read Cookie
 console.log(req.cookies)
res.send(`Cokkie Read`);
});

router.get('/delete', function(req, res) {

res.clearCookie('name')
res.send(`Cokkie Deleted  `);
})

module.exports = router;
