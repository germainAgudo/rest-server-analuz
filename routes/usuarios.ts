import { Router } from "express";
import { check } from "express-validator";
import { deleteUsuario, getUsuario, getUsuarios, postUsuario, putUsuario } from "../controllers/usuarios";
import { existeUsuarioPorId } from "../helpers/db-validatoe";
import { validarCampos } from "../middlewares/validar-campos";
import { coleccionesPermitidas } from "../middlewares/validar-informacion";
import { validarJWT } from "../middlewares/validar-jwt";
import { validarPermisos } from "../middlewares/validar-permisos";
import { esAdminRole } from "../middlewares/validar-roles";

const router = Router();


router.get('/',
[
    validarJWT
    , esAdminRole
],
 getUsuarios);


router.get('/:id',
[   
    validarJWT,
    validarPermisos,
    check('id', 'El id es obligatorio').not().isEmpty(),
    check('id').custom( existeUsuarioPorId),
    validarCampos
]
, getUsuario);


router.post('/',
[    
      check('correo', 'El correo es obligatorio').isEmail()
    , check('nombre', 'El nombre es obligatorio').not().isEmpty()
    , check('numero_telefonico','El número telefonico es obligatorio').not().isEmpty()
    , check('fecha_nacimiento', 'La fecha de nacimiento es obligatoria').not().isEmpty()
    , check('sexo', 'El sexo es obligatorio').not().isEmpty()
    , check('sexo').custom(s=> coleccionesPermitidas( s,['h', 'm'] ) ) 
    , check('password','El password debe de ser de mas de 5 caracteres').isLength( {min:6} ),
      validarCampos

],
postUsuario);


router.put('/:id',
[
    validarJWT,
    validarPermisos,
    check('id', 'El id es obligatorio').not().isEmpty(),
    check('id').custom( existeUsuarioPorId),
    validarCampos
],    
putUsuario);


router.delete('/:id',
[
    validarJWT,
    validarPermisos,
    check('id', 'El id es obligatorio').not().isEmpty(),
    check('id').custom( existeUsuarioPorId),
    validarCampos
]
,
deleteUsuario);













export default router;

