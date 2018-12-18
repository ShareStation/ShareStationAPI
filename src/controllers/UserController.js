const User = require('../models/User');
const bcrypt = require('bcrypt');

const cryptPassword = (password, callback) => {
    const saltRounds = 10;
    bcrypt.genSalt(saltRounds, (error, salt) => {

        if (error) return;

        bcrypt.hash(
            password,
            salt,
            (error, hash) => callback(error, hash)
        );
    });
}

module.exports = {
    async insertNewUser(req, res) {
        const userThatWillBeInserted = req.body;
        const userPassword = userThatWillBeInserted.password;

        cryptPassword(userPassword, async (error, hash) => {
            userThatWillBeInserted.password = hash;

            const insertedUser = await User.create(userThatWillBeInserted);
            
            req.io.emit('newUserInserted', insertedUser);
            
            return res.json(insertedUser);
        });
    }
};