// exports.crearLogin=(req,res) =>{
//     console.log(req.body);
// const res = require("express/lib/response");
// const Login = require("../models/Login2");
// const jwt = require('jsonwebtoken');

// // }
// exports.crearLogin = async (req, res) => {

//     try{
//         let login; 
//         login =new Login(req.body);
//         await login.save();
//         const token = jwt.sign({_id: login._id}, 'secretkey');
//         // res.send(login);
//         res.status(200).json({token})
//     } catch(error){
//         console.log(error)
//         res.status(500).send('Hubo un error');
//     }
// }

// exports.registrarseLogin = async (req, res) => {

//     const { email, password } = req.body;
//     const login = await Login.findOne({email})
//     if(!login) return res.status(401).send("The email doesn't exists");
//     if (login.password !== password) return res.status(401).send('Wrong Password');
//     const token = jwt.sign({_id: login._id}, 'secretkey');
//     return res.status(200).json({token});
// }

// // exports.task=(req, res) =>{
// //     res.json([
// //         {
// //             _id: 1,
// //             name: 'Task one',
// //             description: 'lorem ipsum',
// //             date: "2022-01-17T00:23:49.157Z"
// //         },
// //         {
// //             _id: 2,
// //             name: 'Task two',
// //             description: 'lorem ipsum',
// //             date: "2022-01-17T00:23:49.157Z"
// //         },
// //         {
// //             _id: 3,
// //             name: 'Task three',
// //             description: 'lorem ipsum',
// //             date: "2022-01-17T00:23:49.157Z"
// //         }
// //     ])
// // };


// // exports.privateTasks=(req, res) =>{
// //     verifyToken()
// //     res.json([
// //         {
// //             _id: 1,
// //             name: 'Task one',
// //             description: 'lorem ipsum',
// //             date: "2022-01-17T00:23:49.157Z"
// //         },
// //         {
// //             _id: 2,
// //             name: 'Task two',
// //             description: 'lorem ipsum',
// //             date: "2022-01-17T00:23:49.157Z"
// //         },
// //         {
// //             _id: 3,
// //             name: 'Task three',
// //             description: 'lorem ipsum',
// //             date: "2022-01-17T00:23:49.157Z"
// //         }
// //     ])
// // };

// // // router.get('/private-tasks', verifyToken, (req, res) =>{
// // //     res.json([
// // //         {
// // //             _id: 1,
// // //             name: 'Task one',
// // //             description: 'lorem ipsum',
// // //             date: "2022-01-17T00:23:49.157Z"
// // //         },
// // //         {
// // //             _id: 2,
// // //             name: 'Task two',
// // //             description: 'lorem ipsum',
// // //             date: "2022-01-17T00:23:49.157Z"
// // //         },
// // //         {
// // //             _id: 3,
// // //             name: 'Task three',
// // //             description: 'lorem ipsum',
// // //             date: "2022-01-17T00:23:49.157Z"
// // //         }
// // //     ])
// // // });

// // // module.exports = router;

// // function verifyToken(req, res, next) {
// //     if(!req.headers.authorization) {
// //         return res.status(401).send('anUthorize Request');
// //     }
// //     const token = req.headers.authorization.split(' ')[1]
// //     if(token === 'null'){
// //         return res.status(401).send('anUthorize Request');
// //     }

// //     const payload = jwt.verify(token, 'secretkey');
// //     req.userId = payload._id;
// //     next();
// // }

const res = require("express/lib/response");
const Producto = require("../models/Login2");


exports.crearLogin = async (req, res) => {
    try{
        let producto;

        // Creamos nuestro producto
        producto=new Producto(req.body);

        await producto.save();
        res.send(producto);


    } catch(error){
        console.log(error)
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerLogins= async (req, res)=>{
    
    try {
        const productos= await Producto.find();
        res.json(productos);
    } catch(error){
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

exports.actualizarLogin = async (req, res)=>{
    
    try {
        const{email, password, tipo} = req.body;
        let producto= await Producto.findById(req.params.id);

        if(!producto){
            res.status(404).json({msg: 'No existe el producto'})
        }
        producto.email=email; 
        producto.password=password; 
        producto.tipo=tipo; 
        producto = await Producto.findOneAndUpdate({ _id:req.params.id}, producto, {new:true})
        res.json(producto);
    } catch(error){
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

exports.obtenerLogin = async (req, res)=>{
    
    try {
        let producto= await Producto.findById(req.params.id);

        if(!producto){
            res.status(404).json({msg: 'No existe el producto'})
        } 
        res.json(producto);
    } catch(error){
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

exports.eliminarLogin = async (req, res)=>{
    
    try {
        let producto= await Producto.findById(req.params.id);

        if(!producto){
            res.status(404).json({msg: 'No existe el producto'})
        } 
        await Producto.findOneAndRemove({_id: req.params.id})
        res.json({msg: 'Producto eliminado con exito'});
    } catch(error){
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}