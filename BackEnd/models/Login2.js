

const { Schema, model } = require('mongoose');

const login2Schema  = new Schema({
    email: String,
    password: String,
    tipo: String
}, {
    timestamps: true
});

module.exports = model('Login2', login2Schema);