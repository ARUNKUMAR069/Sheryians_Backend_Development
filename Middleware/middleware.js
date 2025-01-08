const express = require('express');
const app = express();




//Middleware
// USe method is used to use the middleware
app.use(function (req, res, next) {
console.log('Time:', Date.now(),req.method,req.url);
console.log("HELLO FROM MIDDLEWARE")
    next()
})



// ROUTE
app.get('/', (req, res) => {

    res.send("Hello Your API IS WORKING")


}).get('/about', (req, res) => {


    res.send("About Page")



})


const port = 3000;
app.listen(port, () => {

    console.log(`Server is running on port ${port}`)

})