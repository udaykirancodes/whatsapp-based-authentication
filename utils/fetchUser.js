const jwt = require('jsonwebtoken');
const config = require('../config/config');

const fetchUser = (req, res, next) => {
    const token = req.header('authToken');
    if (!token) {
        return res.status(400).json({ success: false, msg: "Invalid AuthToken" });
    }
    try {
        let data = jwt.verify(token, config.jwt);
        req.user = data.user
        next();
    } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, msg: "Internal Server Error" })
    }
}

module.exports = fetchUser;