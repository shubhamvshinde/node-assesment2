/// Creating a server--
// cont path = require("express")
// for installing the server we have to type-- npm install express
const express = require("express") // import the express package in our app.js

const port = 4000;
//create app object
const app = express() // calling the server

// Creat Home route
app.get("/",function(req,res){
    res.send("This is html text")//html text
})


// creating the rout
app.get('/api/app',function(req,res){
    res.send("<h1>Express.js</h1> <p>simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License.<p> It is designed for building web applications and APIs.")
})

app.listen(port,()=>{
        console.log("Application is Working.")
    })