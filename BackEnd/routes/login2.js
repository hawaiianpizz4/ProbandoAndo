

const { Router } = require('express');
const router = Router();

const Login = require('../models/Login2');

const jwt = require('jsonwebtoken');

// router.get('/', (req, res) => res.send('Hello world'))

router.post('/signup2', async (req, res) =>{
    const { email, password, tipo } = req.body;
    const newLogin = new Login({email, password, tipo});
    await newLogin.save();

    const token = jwt.sign({_id: newLogin._id}, 'secretkey');
    res.status(200).json({token, tipo})
});

router.post('/signin2', async (req, res) =>{
    const { email, password } = req.body;
    const login = await Login.findOne({email})
    if(!login) return res.status(401).send("The email doesn't exists");
    if (login.password !== password) return res.status(401).send('Wrong Password');
    const token = jwt.sign({_id: login._id}, 'secretkey');
    const tipo= login.tipo;
    return res.status(200).json({token, tipo});
});

//
// router.get('/', verifyToken, async (req, res) => {
    
//     try{
//         const logins= await Login.find();
//         res.json(logins);


//     } catch(error){
//         console.log(error)
//         res.status(500).send('Hubo un error');
//     }
// });


// router.put('/:id', async(req, res)=>{
//     try {
        
//         const{email, password, tipo} = req.body;
//         let persona= await Login.findById(req.params.id);
//         // let persona= await Login.findById(req.params.id);

//         if(!persona){
//             res.status(404).json({msg: 'No existe esa persona'})
//         }
//         persona.email=email; 
//         persona.password=password; 
//         persona.tipo=tipo;
//         persona = await Login.findOneAndUpdate({ _id:req.params.id}, persona, {new:true})
//         res.json(persona);
//     } catch(error){
//         console.log(error);
//         res.status(500).send('Hubo un error')
//     }
// });

// router.get('/:id',async (req, res)=>{
    
//     try {
//         let persona= await Login.findById(req.params.id);

//         if(!persona){
//             res.status(404).json({msg: 'No existe la persona'})
//         } 
//         res.json(persona);
//     } catch(error){
//         console.log(error);
//         res.status(500).send('Hubo un error')
//     }
// });

// router.delete('/:id', async (req, res)=>{
    
//     try {
//         let persona= await Login.findById(req.params.id);

//         if(!persona){
//             res.status(404).json({msg: 'No existe la persona'})
//         } 
//         await Login.findOneAndRemove({_id: req.params.id})
//         res.json({msg: 'persona eliminada con exito'});
//     } catch(error){
//         console.log(error);
//         res.status(500).send('Hubo un error')
//     }
// });
  

// 

router.get('/tasks', (req, res) =>{
    res.json([
        {
            _id: 1,
            name: 'Task one',
            description: 'lorem ipsum',
            date: "2022-01-17T00:23:49.157Z"
        },
        {
            _id: 2,
            name: 'Task two',
            description: 'lorem ipsum',
            date: "2022-01-17T00:23:49.157Z"
        },
        {
            _id: 3,
            name: 'Task three',
            description: 'lorem ipsum',
            date: "2022-01-17T00:23:49.157Z"
        }
    ])
});

router.get('/private-tasks', verifyToken, (req, res) =>{
    res.json([
        {
            _id: 1,
            name: 'Task one',
            description: 'lorem ipsum',
            date: "2022-01-17T00:23:49.157Z"
        },
        {
            _id: 2,
            name: 'Task two',
            description: 'lorem ipsum',
            date: "2022-01-17T00:23:49.157Z"
        },
        {
            _id: 3,
            name: 'Task three',
            description: 'lorem ipsum',
            date: "2022-01-17T00:23:49.157Z"
        }
    ])
});

router.get('/profile', verifyToken, (req, res) =>{
    res.send(req.userId);
});

module.exports = router;

function verifyToken(req, res, next) {
    if(!req.headers.authorization) {
        return res.status(401).send('anUthorize Request');
    }
    const token = req.headers.authorization.split(' ')[1]
    if(token === 'null'){
        return res.status(401).send('anUthorize Request');
    }

    const payload = jwt.verify(token, 'secretkey');
    req.userId = payload._id;
    next();
}


//Rutas para Login
const express= require('express');
const loginController= require('../controllers/loginController')

// api/productos

router.post('/', loginController.crearLogin);
router.get('/', loginController.obtenerLogins);
router.put('/:id', loginController.actualizarLogin);
router.get('/:id', loginController.obtenerLogin);
router.delete('/:id', loginController.eliminarLogin);

module.exports = router;
