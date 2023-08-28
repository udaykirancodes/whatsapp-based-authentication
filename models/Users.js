const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    phone: {
        type: String,
        require: true,
        unique: true
    },
})

module.exports = mongoose.model('Users', UserSchema);