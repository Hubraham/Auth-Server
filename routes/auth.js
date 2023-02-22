const { Router} = require('express');

const { check } = require('express-validator');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-JWT');


 const router = Router();

//crear un usuario
router.post('/new', [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'el Email es obligatorio').isEmail(),
    check('password', 'la contraseña es obligatoria').isLength({min: 6}),
    validarCampos 
], crearUsuario);

// //Logear usuario
router.post('/',[
    check('email', 'el Email es obligatorio').isEmail(),
    check('password', 'la contraseña es obligatoria').isLength({min: 6}),
    validarCampos
], loginUsuario);

// //validar token
router.get('/renew',validarJWT, revalidarToken);



module.exports = router;