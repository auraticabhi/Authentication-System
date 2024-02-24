const express = require('express');
const getAllUser = require('../controllers/users.js')

const usersRouter = express.Router();

usersRouter.get('/users', getAllUser);

module.exports = usersRouter;