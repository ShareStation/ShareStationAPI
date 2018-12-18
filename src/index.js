const express = require('express');
const app = express();
const mongoose = require('mongoose');
const server = require('http').Server(app);
const io = require('socket.io')(server);
const cors = require('cors');
const routes = require('./routes');

mongoose.connect('mongodb://client:32jdggv461098ppMmsss771552d@ds123728.mlab.com:23728/sharestationdb', {
    useNewUrlParser: true
});

app.use(cors());
app.use((req, res, next) => {
    req.io = io;
    return next();
});
app.use(express.json());
app.use(routes);

server.listen(3000, () => console.log('Server is running on 3000 port...'));