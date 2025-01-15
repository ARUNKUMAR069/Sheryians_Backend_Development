var express = require('express');
var router = express.Router();
const UserModel = require('./users');
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});



router.get('/create', async function (req, res, next) {

  const user = await UserModel.create({
    username: "Arshuuu",
    nickname: "Arshu",
    description: "I am a Data Scientist",
    categories: ["Data Analysis", "Artifical Intelligence", "Business", "Technology"],
  });
  res.send(user);
})






// Case Insensitive Search in MongoDB

//  Q1 How we do case insensitive search in MongoDB?
router.get('/find', async function (req, res, next) {
  //  So for case insensitive search we need to use Regular Expression
  //  So we will use $regex
  // new RegExp(search,flags)
  var regex = new RegExp("^Arsh$", "i")
  // or
  // var regex= new RegExp("Arsh","i")
  // ^ means = start with   $ means = end with e.g ^Arsh$ means start with Arsh and end with Arsh
  const findUser = await UserModel.find({ username: regex });
  res.send(findUser);
})

// Q2 How do I find documents where an array field contains all set of values?
router.get('/findall', async function (req, res, next) {
  const findUser = await UserModel.find({ categories: { $all: ["Business"] } });
  res.send(findUser);
})


// Q3 How can I search for doucuments with a specific date range in Mongoose?

router.get('/findwithdate', async function (req, res, next) {
  var date1 = new Date('2024-01-13');
  var date2 = new Date('2025-01-14');
  const findUser = await UserModel.find({ datecreated: { $gte: date1, $lte: date2 } });

  res.send(findUser);
})



// Q4 How can i filter document based on the existence of a field in Mongoose?
router.get('/findwithfield', async function (req, res, next) {
  const findUser = await UserModel.find({ categories: { $exists: true } });
  res.send(findUser);

})

// Q5 How can i filter documents based on a specific field length in Mongoose?

router.get('/findwithlength', async function (req, res, next) {
  // Creating an expressions because some problems are complex and to handle it these expressions are necessary


  const findUser = await UserModel.find({
    $expr: {
      $and: [
        { $gte: [{ $strLenCP: "$username" }, 4] },
        { $lte: [{ $strLenCP: "$username" }, 5] }

      ]

    }
  });
  res.send(findUser)
})





module.exports = router;
