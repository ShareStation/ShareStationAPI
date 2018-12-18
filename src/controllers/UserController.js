const User = require('../models/User');

module.exports = {
    async insertNewUser(req, res) {
        const userThatWillBeInserted = req.body;

        const insertedUser = await User.create(userThatWillBeInserted);

        req.io.emit('newUserInserted', insertedUser);

        return res.json(insertedUser);
    }
};