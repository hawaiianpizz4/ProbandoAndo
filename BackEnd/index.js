// const express= require('express');
// const conectarDB= require('./config/db')

// // Creamos el servidor
// const app=express();

// // Conectamos a la BD
// conectarDB();

// app.use('/api/productos', require('./routes/producto'));

// // Definimos ruta principal

// // app.get('/', (req, res)=>{
// //     res.send('Hola Mundo');
// // })

// app.listen(4000, ()=>{
//     console.log('El servidor esta corriendo perfectamente')
// })

//Base de Datos1
const conectarDB= require('./config/db');

const express= require('express');
const cors=require("cors");
//Conectar a la base de datos

// Creamos el servidor
const app=express();
// Conectamos a la BD
conectarDB();
app.use(cors())

app.use(express.json());
// Productos
app.use('/api/productos',require('./routes/producto'));
// Usuarios
//Logins
// app.use('/api/logins',require('./routes/login'));
//Logins2
app.use('/api/logins2',require('./routes/login2'));
// app.use('/api/logins3',require('./routes/login3'));




app.listen(4000, ()=>{
    console.log('El servidor esta corriendo perfectamente')
})

