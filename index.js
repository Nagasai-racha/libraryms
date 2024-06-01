const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const bodyParser = require("body-parser")
const app = express()
const userRoute = require('./routes/userRoute')
const bookRoute = require('./routes/bookRoute')


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/users",userRoute);
app.use("/api/books",bookRoute);



const connect = async () =>{
    try {
        await mongoose.connect(process.env.MONGO);
        app.listen(process.env.PORT,()=>{  
            console.log('Server is running and connected to db...')
        })
      } catch (error) {
        console.log(error);
      }
}
connect();