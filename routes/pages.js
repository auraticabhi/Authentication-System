const express = require('express');
const { loginPageController, dashboardPageController } = require('../controllers/pages.js')

const pageRouter = express.Router();

pageRouter.get("/login", loginPageController);

pageRouter.get("/dashboard", dashboardPageController);

module.exports = pageRouter;