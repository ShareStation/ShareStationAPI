const express = require('express');
const routes = express.Router();
const app = express()
const bodyParser = require("body-parser")
const UserController = require('./controllers/UserController');
const questionController = require('./controllers/QuestionController');
const { check, validationResult } = require('express-validator/check');

app.use(bodyParser.urlencoded({extended:true}))

//-----------------------------------User routes-------------------------------------

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

routes.delete('/user/:id', UserController.deleteUser);

routes.patch('/user/:id', UserController.updateUserById);

//-----------------------------------Question routes-------------------------------------

routes.get("/question", questionController.select)
      .get("/question/:questionId", questionController.selectById)
      .post("/question", questionController.insert)
      .put("/question", questionController.update)
      .delete("/question", questionController.delete)

module.exports = routes;