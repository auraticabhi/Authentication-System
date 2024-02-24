const express = require('express');
const session = require('express-session');
const passport = require('passport');
const path = require('path');
const authRouter = require('./routes/auth.js');
const pageRouter = require('./routes/pages.js');
const usersRouter = require('./routes/users.js')
const connectMongoose = require('./config/database.js')
const initializingPassport = require('./config/passportConfig.js')
require("dotenv").config();

//connecting to database
connectMongoose();

const app = express();
const PORT = process.env.PORT || 5000

//setting view engine
app.set("view engine", "ejs");
app.set('views', './views');

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, "public")));

//setting routes
app.use("/auth", authRouter);
app.use("/pages", pageRouter);
app.use("/all", usersRouter);

//initializing passport
initializingPassport(passport);

//for testing the working of server
// app.get("/", (req, res) => {
//     res.send("Test")
// })

app.listen(PORT, () => {
    console.log(`Server started at PORT ${PORT}`);
})