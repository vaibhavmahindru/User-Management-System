const express = require('express');
const morgan = require('morgan')
const dotenv = require('dotenv')
const bodyparser = require('body-parser')
const path = require('path')

const connnectDB = require('./server/database/connection')

const app = express();

dotenv.config({path:'.env'})

const PORT = process.env.PORT || 8080;

//to log the requets
app.use(morgan('tiny'))

//mongodb connection
connnectDB();

//parsing request to the body parser
app.use(bodyparser.urlencoded({extended:true}))


//set view engine
app.set("view engine","ejs")

//loading assests using middleware
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))

//load routers
app.use('/',require('./server/routes/router'))

app.listen(3000, ()=>{console.log(`server is running on http://localhost:${PORT}`)});
