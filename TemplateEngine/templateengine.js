const express =require('express')
const app=express();

app.set("view engine","ejs")
// app.set("view engine","pug")
app.get('/',(req,res)=>{
    res.render('templateengine')
})
app.get('/home',(req,res)=>{
    res.send('Welcome to home page')
})



app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})