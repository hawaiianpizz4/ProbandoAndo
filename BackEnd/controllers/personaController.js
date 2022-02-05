const res = require("express/lib/response");
const Persona = require("../models/Login3");


exports.crearUsuario = async (req, res) => {

    try{
        let persona;
        // Creamos nuestro usuario
        persona=new Persona(req.body);

        await persona.save();
        res.send(persona);


    } catch(error){
        console.log(error)
        res.status(500).send('Hubo un error');
    }
}



exports.obtenerUsuarios = async (req, res) => {
    
    try{
        const personas= await Persona.find();
        res.json(personas);


    } catch(error){
        console.log(error)
        res.status(500).send('Hubo un error');
    }
}


exports.actualizarUsuario = async (req, res) => {

    try {
        
        const{nombre, email, nombreusuario, password} = req.body;
        let persona= await Persona.findById(req.params.id);

        if(!persona){
            res.status(404).json({msg: 'No existe esa persona'})
        }
        persona.nombre=nombre; 
        persona.email=email; 
        persona.nombreusuario=nombreusuario; 
        persona.password=password; 
        persona = await Persona.findOneAndUpdate({ _id:req.params.id}, persona, {new:true})
        res.json(persona);
    } catch(error){
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}


exports.obtenerUsuario = async (req, res)=>{
    
    try {
        let persona= await Persona.findById(req.params.id);

        if(!persona){
            res.status(404).json({msg: 'No existe la persona'})
        } 
        res.json(persona);
    } catch(error){
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

exports.eliminarUsuario = async (req, res)=>{
    
    try {
        let persona= await Persona.findById(req.params.id);

        if(!persona){
            res.status(404).json({msg: 'No existe la persona'})
        } 
        await Persona.findOneAndRemove({_id: req.params.id})
        res.json({msg: 'persona eliminada con exito'});
    } catch(error){
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}