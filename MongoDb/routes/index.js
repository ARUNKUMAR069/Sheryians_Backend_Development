var express = require('express');
var router = express.Router();
const UserModel = require('./users')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// Create a new user
router.get('/create', async function (req, res) {
 const createdUser= await UserModel.create({
    username: 'Jjijh Doe',
    email: 'hn@gmail.com',
    age: 25
  })
  res.send(createdUser)
})

// Read all users
router.get('/allusers',async function (req, res) {

 let allUsers=await UserModel.findOne({
  username: 'abc Doe'
 })

res.send(allUsers)
})
// Delete users
router.get('/delete', async function (req, res) {
  const deletedUser = await UserModel.deleteMany({})
  res.send(deletedUser)
})



module.exports = router;
