// const { Schema, model } = require('mongoose');

// const userSchema  = new Schema({
//     email: String,
//     password: String
// }, {
//     timestamps: true
// });

// module.exports = model('user', userSchema);


// const mongoose= require('mongoose');




// const LoginSchema =mongoose.Schema({
//     email:{
//         type: String, 
//         required: true
//     },
//     password:{
//         type: String, 
//         required: true
//     },
//     fechaCreacion:{
//         type: Date, 
//         default: Date.now()
//     },
    
// });

// module.exports =mongoose.model('Login',LoginSchema);

const { Schema, model } = require('mongoose');

const loginSchema  = new Schema({
    email: String,
    password: String
}, {
    timestamps: true
});

module.exports = model('Login', loginSchema);