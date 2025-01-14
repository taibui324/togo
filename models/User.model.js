const mongoose = require('mongoose')

// create UserSchema
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: { type: String, required: true }
}, 
{
    collection: 'users'
})

const model = mongoose.model('User', UserSchema) 

module.exports = model;