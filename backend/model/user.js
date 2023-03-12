const mongoose = require('mongoose');//import mongoose

const userSchema = new mongoose.Schema({
    name:String,
    age:Number,
    sex:String,
    email:String,
    address:[
        {
            street:String,
            city:String,
            state:String,
            zip:Number
        }
    ],
    
    
});

module.exports = mongoose.model('users', userSchema);//create a model from the schema and export it to be used in other files

