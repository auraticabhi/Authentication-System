const mongoose = require('mongoose');

//function to connect to database
const connectMongoose = () => {
    mongoose.connect(process.env.DATABASE_URL)
        .then(() => {
            console.log('Database Connected');
        }).catch((e) => {
            console.log("Error connecting database: ", e);
        })
}

module.exports = connectMongoose