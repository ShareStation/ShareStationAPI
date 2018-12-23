const express = require('express');
const routes = express.Router();
const UserController = require('./controllers/UserController');
const { check, validationResult } = require('express-validator/check');


routes.post('/user', [
    check('firstName').not().isEmpty(),
    check('lastName').not().isEmpty(),
    check('username').not().isEmpty(),
    check('password').not().isEmpty(),
    check('dateOfBirth').not().isEmpty()
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    UserController.insertNewUser(req, res);
});

routes.get('/user', UserController.getAllUsers);
routes.get('/user/:id', UserController.getUserById);

module.exports = routes;