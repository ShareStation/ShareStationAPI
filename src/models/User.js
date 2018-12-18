const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firsName: String,
    lastName: String,
    username: String,
    password: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    dateOfBirth: String,
    active: {
        type: Boolean,
        default: true
    },
    betaTester: Boolean
});

module.exports = mongoose.model('User', UserSchema);