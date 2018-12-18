const express = require('express');
const routes = express.Router();

routes.get('/user', (req, res) => res.send('Api is running...'));

module.exports = routes;