const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static('Public')); 

/*
    When we listen to a port , node js is running as a runtime environment for javascript.

    Port for https : 443
    Port for http : 80
*/

app.get('/',(req,res,next) => {
    res.sendFile('index.html'); 
})


app.listen(PORT,() => {
    console.log(`Server is running on http://localhost:${PORT}`);
})