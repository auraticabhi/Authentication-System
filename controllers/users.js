const User = require('../models/User.js')

const getAllUser = async(req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({
            success: true,
            users
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            message: err.message
        })
    }
}

module.exports = getAllUser