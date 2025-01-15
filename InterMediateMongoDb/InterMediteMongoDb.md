First step Setup Mongoose


Q1 How we do case insensitive search in MongoDB?


Ans: 
router.get('/find', async function(req, res, next){
//  So for case insensitive search we need to use Regular Expression
//  So we will use $regex
// new RegExp(search,flags)
var regex= new RegExp("^Arsh$","i")
// or
// var regex= new RegExp("Arsh","i")
// ^ means = start with   $ means = end with e.g ^Arsh$ means start with Arsh and end with Arsh
  const findUser = await UserModel.find({username:regex});
  res.send(findUser);
  })


// Q2 How do I find documents where an array field contains all set of values?
Ans:

  router.get('/findall', async function(req, res, next){
  const findUser = await UserModel.find({   categories: { $all: ["Business"] } });
  res.send(findUser);
  })
