//adding files using the express method
//originally done in index.js

const express = require('express');

const path = require('path')
const server = express('server')

//middleware definitions - express static middleware 
//info- finds and connects all files
server.use(express.static(path.join(__dirname,'public')))





//route
// server.get('/',serveHomePage)
// server.get('/profile', serveProfilePage)

server.listen(3000,() => console.log('server is logged n ready'))