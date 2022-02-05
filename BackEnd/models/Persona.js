const mongoose= require('mongoose');


const PersonaSchema =mongoose.Schema({
    nombre:{
        type: String, 
        required: true
    },
    email:{
        type: String, 
        required: true
    },
    nombreusuario:{
        type: String, 
        required: true
    },
    password:{
        type: String, 
        required: true
    },
    fechaCreacion:{
        type: Date, 
        default: Date.now()
    }


});









module.exports =mongoose.model('Persona',PersonaSchema);