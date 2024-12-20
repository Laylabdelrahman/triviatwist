const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
});

const User = mongoose.model('User' ,UserSchema);

module.exports = User;