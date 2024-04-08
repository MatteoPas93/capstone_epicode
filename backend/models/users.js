const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        max: 250
    },
    email: {
        type: String,
        required: true,
        max: 250
    },
    password: {
        type: String
    },
    birthday: {
        type: Number,
        required: false
    },
    avatar: {
        type: String,
        required: false
    }
}, {timestamps: true, strict: true});

module.exports = mongoose.model('userModel', UserSchema, 'users');