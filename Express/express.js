const express = require('express');
const app = express();




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