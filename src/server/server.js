const express = require('express');
const { userRouter } = require('../routes/userRouter');
const server = express();

server.use(express.json());
server.use('/api/user', userRouter);

module.exports = server