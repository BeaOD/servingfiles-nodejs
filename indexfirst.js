//adding files using the standard / manual method
//originally done in index.js

const express = require('express');

//specifying path to html file
const path = require('path')
const server = express()


//function/ handler
const serveHomePage = (req,res)=>{
    //res.send('homepage handler')

    //info - create a file to path you want to send
    const homepagefilePath = path.join(__dirname,'public' ,'index.html');
    //send file to client
    res.sendFile(homepagefilePath)
}

const serveProfilePage = (req,res) =>{
    const profilePageFilePath = path.join(__dirname,'public','profile.html')
    res.sendFile(profilePageFilePath) 
}


//route
server.get('/',serveHomePage)
server.get('/profile', serveProfilePage)

server.listen(3000,() => console.log('server is logged n ready'))