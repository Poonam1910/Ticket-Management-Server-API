const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const userSchema = new Schema({
    loginName:{ type: String, required: true,},
    name: { type: String, required: true,},
    email: { type: String, required: true},
    role: { type: String, required: true },
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
