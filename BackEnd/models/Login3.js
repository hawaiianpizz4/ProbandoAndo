const mongoose= require('mongoose');


const Login3Schema =mongoose.Schema({
    
    email:{
        type: String, 
        required: true
    },
   
    password:{
        type: String, 
        required: true
    },
    tipo:{
        type: String, 
        required: true
    }
});

module.exports =mongoose.model('Login3', Login3Schema);