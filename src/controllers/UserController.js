const User = require('../models/User');
// const bcrypt = require('bcrypt');

// const cryptPassword = (password, callback) => {
//     const saltRounds = 10;
//     bcrypt.genSalt(saltRounds, (error, salt) => {

//         if (error) return;

//         bcrypt.hash(
//             password,
//             salt,
//             (error, hash) => callback(error, hash)
//         );
//     });
// }

module.exports = {
    // async insertNewUser(req, res) {
    //     const userThatWillBeInserted = req.body;
    //     const userPassword = userThatWillBeInserted.password;

    //     cryptPassword(userPassword, async (error, hash) => {
    //         userThatWillBeInserted.password = hash;

    //         const insertedUser = await User.create(userThatWillBeInserted);

    //         req.io.emit('newUseHasBeenInserted', insertedUser);

    //         return res.json(insertedUser);
    //     });
    // },

    async getAllUsers(req, res) {
        User.find({}, (error, users) => {
            if (error !== null) {
                res
                    .status(500)
                    .json({ error });
                return;
            }

            return res.json({
                data: [{ users }]
            });
        }).sort('-createdAt');
    },

    async getUserById(req, res) {
        const userIdToFetch = req.params.id;
        User.findById(userIdToFetch, (error, user) => {
            if (user === undefined) {
                return res
                    .status(404)
                    .json({
                        message: "User not found"
                    });
            }
            else if (error !== null) {
                return res
                    .status(500)
                    .json({ error });

            }

            return res.json({ data: [{ user }] });
        });
    },

    async deleteUser(req, res) {
        const userIdToDelete = req.params.id;
        User.findByIdAndUpdate(userIdToDelete,
            { active: false },
            { new: true },
            (error, updatedUser) => {
                if (error !== null) {
                    return res
                        .status(404)
                        .json({ message: "User not found" });
                }

                req.io.emit('userHasBeenDeleted', updatedUser);

                return res.json({ data: [{ updatedUser }] });
            }
        );
    },

    async updateUserById(req, res) {
        const userIdToUpdate = req.params.id;
        const dataToUpdateUser = req.body;
        User.findByIdAndUpdate(
            userIdToUpdate,
            dataToUpdateUser,
            { new: true },
            (error, updatedUser) => {
                if (error !== null) {
                    return res
                        .status(404)
                        .json({ error: 'User not found' });
                }

                req.io.emit('userHasBeenUpdated', updatedUser);

                return res
                    .json({ updatedUser });
            }
        );
    }
};