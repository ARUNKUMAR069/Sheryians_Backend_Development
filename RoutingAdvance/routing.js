const express = require('express');
const app = express();
const port = 3000 || 9000;



// Middleware
app.use(function (req, res, next) {
    console.log('Time:', Date.now(),req.method,req.url);
    next()
    })

// Routes
// Home Route
app.get('/', (req, res,) => {
res.send("Hello Your  / API IS WORKING")

})
// Profie Route
app.get('/profile', (req, res,) => {
    res.send("Hello from Profile")
    })













// Port
app.listen(port, (err) => {
    if (err) {
        console.log(err)
    }

    console.log(`Server is running on port ${port}`)
});