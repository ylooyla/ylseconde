let express = require('express')
let path = require('path')
let router = require("./routes/router")
let mongoose = require("mongoose")
let user = require("./models/user")
let bodyParser = require('body-parser')
let session = require("express-session")
let multer = require("multer")

let app = express()

mongoose.connect('mongodb://localhost/shopping',{useNewUrlParser:true})

app.engine('html', require('express-art-template'))
app.use('/public/', express.static(path.join(__dirname, './public/')))
app.use('/node_modules/',express.static(path.join(__dirname,'./node_modules/')))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(session({
    
    secret: 'itcast',
    resave: false,
    saveUninitialized: false 
  }))

app.use(router)


app.listen(5555,function(){
    console.log("Server on running")
})
