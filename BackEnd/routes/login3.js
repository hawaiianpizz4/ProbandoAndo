// Rutas para usuario
const express= require('express');
const router =express.Router();

const personaController=require('../controllers/personaController');
// api/productos
router.post('/', personaController.crearUsuario);
router.get('/', personaController.obtenerUsuarios);
router.put('/:id', personaController.actualizarUsuario);
router.get('/:id', personaController.obtenerUsuario);
router.delete('/:id', personaController.eliminarUsuario);

module.exports=router