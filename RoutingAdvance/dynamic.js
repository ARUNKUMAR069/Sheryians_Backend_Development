const express =require('express');
const app = express();
const port = 3000 || 9000;
// Route



// :username=> Parametters
app.get('/profile/:username',(req,res)=>{
res.send(`Hello ${req.params.username}`)
})










app.listen(port,(err)=>{
if(err){
    console.log(err)
}
console.log(`Server is running on port ${port}`)

})