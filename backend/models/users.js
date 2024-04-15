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
        type: String,
    },
    role: {
        type: String,
        required: false
    },
    birthday: {
        type: String,
        required: false
    },
    avatar: {
        type: String,
        required: false
    }
}, {timestamps: true, strict: true});

module.exports = mongoose.model('userModel', UserSchema, 'users');