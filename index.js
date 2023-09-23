const express = require('express');

const path = require('path')
const path = require('body-parser')
const server = express()

const loginRequestHandler =(req,res) =>{
    //console.log(req) - info - request appears in terminal
    // let body = '';
    // req.on('data', chunk => {
    //      body += chunk;
    // }) 
    // req.on('end',() => {
        //console.log(body) - info- request data parsed to terminal
        //- comment -parse with regExp
    //     console.log(body)
    // })
    console.log(req.body)
    //console.log(req.body.email) - info- to get email
    //console.log(req.body.password) - info- to get pword
    res.send('Done');
}

//middleware definitions - express static middleware 
//info- finds and connects all files
server.use(express.static(path.join(__dirname,'public')))
server.use(bodyParser.urlencoded({extended: false}))

//route
// server.get('/',serveHomePage)
server.post('/login', loginRequestHandler)

server.listen(3000,() => console.log('server is logged n ready'))

//- addded
//npm install body-parser, import then add as middleware