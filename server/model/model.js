const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone_number:{
        type: Number,
        required:true
    },
    gender: String,
    address:{
        type:String,
        required:true
    },
})

const Userdb = mongoose.model('userdb',schema)

module.exports = Userdb;