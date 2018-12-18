const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    active: {
        type: Boolean,
        default: true
    },
    betaTester: {
        type: Boolean,
        default: 0
    }
});

module.exports = mongoose.model('User', UserSchema);