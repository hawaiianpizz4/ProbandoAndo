// // Rutas para usuario
// const express= require('express');
// const router =express.Router();

// const loginController=require('../controllers/loginController');
// // // api/logins
// router.post('/signUp', loginController.crearLogin);
// router.post('/signIn', loginController.registrarseLogin);
// router.get('/task', loginController.task);
// router.get('/private-tasks', loginController.privateTasks);
// // router.get('/', personaController.obtenerUsuarios);
// // router.put('/:id', personaController.actualizarUsuario);
// // router.get('/:id', personaController.obtenerUsuario);
// // router.delete('/:id', personaController.eliminarUsuario);
// router.post('/',() =>{
//     console.log("Creando un nuevo login, jeje");
// })

// module.exports=router;
const { Router } = require('express');
const router = Router();

const Login = require('../models/Login');

const jwt = require('jsonwebtoken');

// router.get('/', (req, res) => res.send('Hello world'))

router.post('/signup', async (req, res) =>{
    const { email, password } = req.body;
    const newLogin = new Login({email, password});
    await newLogin.save();

    const token = jwt.sign({_id: newLogin._id}, 'secretkey');
    res.status(200).json({token})
});

router.post('/signin', async (req, res) =>{
    const { email, password } = req.body;
    const login = await Login.findOne({email})
    if(!login) return res.status(401).send("The email doesn't exists");
    if (login.password !== password) return res.status(401).send('Wrong Password');
    const token = jwt.sign({_id: login._id}, 'secretkey');
    return res.status(200).json({token});
});   

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
