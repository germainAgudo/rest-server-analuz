import { Router } from "express";
import { check } from "express-validator";
import { deleteMetodoPago, getMetodoPago, getMetodosPagos, getUploadMetodoPago, postMetodoPago, putMetodoPago, putUploadMetodoPago } from "../controllers/metodo-pago";
import { existeMetodoPagoPorId, existeNombreMetodoPago } from "../helpers/db-validatoe";
import { uploads_metodoPago } from "../helpers/validar-uploads";
import { validarCampos } from "../middlewares/validar-campos";
import { coleccionesPermitidas } from "../middlewares/validar-informacion";
import { validarJWT } from "../middlewares/validar-jwt";
import { esAdminRole } from "../middlewares/validar-roles";


const router = Router();

router.get('/'
,
    [
        validarJWT,
        validarCampos
    ]
,   getMetodosPagos
);

router.get('/:id'
,
    [
        validarJWT,
         check('id','El id es obligatorio').not().isEmpty()
        , check('id').custom( existeMetodoPagoPorId )
        , validarCampos    
    ]
,  getMetodosPagos
);


router.post('/'
,
    [
          validarJWT
        , esAdminRole
        , check('nombre','El nombre del metodo de pago es obligatorio').not().isEmpty()
        , check('nombre').custom( existeNombreMetodoPago )
        , validarCampos    
    ]
, postMetodoPago
);

router.put('/:id'
,
    [
        validarJWT
        , esAdminRole
        , check('id','El id es obligatorio').not().isEmpty()
        , check('id').custom( existeMetodoPagoPorId )
        , check('nombre').not().isEmpty()
        , validarCampos   
    ]
,   putMetodoPago
);

router.delete('/:id'
,
    [
        validarJWT
        , esAdminRole
        , check('id','El id es obligatorio').not().isEmpty()
        , check('id').custom( existeMetodoPagoPorId )

        , validarCampos 
    ]
, deleteMetodoPago
);

router.put('/:coleccion/:id'
,
    [
        validarJWT
        , esAdminRole
        , check('id','El id es obligatorio').not().isEmpty()
        , check('id').custom( existeMetodoPagoPorId)  
        , check('coleccion').custom(c=>coleccionesPermitidas
            (c,[
            'actualizar-imagen'
          
        ]) )
        , validarCampos   
    ],
    uploads_metodoPago
    , 
putUploadMetodoPago
);
router.get('/:coleccion/:id'
,
    [
        validarJWT
        , esAdminRole
        , check('id','El id es obligatorio').not().isEmpty()
        , check('id').custom( existeMetodoPagoPorId)  
        , check('coleccion').custom(c=>coleccionesPermitidas
            (c,[
            'obtener-imagen'
          
        ]) )
        , validarCampos   
    ],
    // uploads_metodoPago
    // , 
getUploadMetodoPago
);
export default router;

