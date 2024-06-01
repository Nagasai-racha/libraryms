const mongoose = require('mongoose')
const {Schema} = mongoose


const users = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
    },
    gender:{
        type:String,
    },
    password:{
        type:String,
    },
    phone:{
        type:String,
    },
    address:{
        type:String,
    }
},{timestamps:true})

const Users = mongoose.model('Users',users);

module.exports = Users;