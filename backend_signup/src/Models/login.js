const mongoose = require('mongoose');

const signUpSchema = new mongoose.Schema({
    username:String,
    email:String,
    password:String,
});
module.exports = mongoose.model('signUp', signUpSchema)