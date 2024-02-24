const express = require('express');
const passport = require('passport');
const logoutController = require('../controllers/auth.js')

const authRouter = express.Router();

authRouter.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

authRouter.get("/google/callback", passport.authenticate("google", { failureRedirect: "/pages/login" }), async(req, res) => {
    res.redirect("/pages/dashboard");
})

authRouter.get("/logout", logoutController)

module.exports = authRouter