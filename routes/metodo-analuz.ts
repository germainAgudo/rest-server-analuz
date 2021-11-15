import { Router } from "express";
import { check } from "express-validator";
import { 
    getMetodosAnaluz 
    , getMetodoAnaluz
    , postMetodoAnaluz
    , putMetodoAnaluz
    , deleteMetodoAnaluz,
    putUploadImagen,
    getUploadImagen
} from "../controllers/metodo-analuz";
import { existeMetodoAnaluzPorId } from "../helpers/db-validatoe";
import { uploads_metodoAnaluz } from "../helpers/validar-uploads";
import { validarCampos } from "../middlewares/validar-campos";
import { coleccionesPermitidas } from "../middlewares/validar-informacion";
import { validarJWT } from "../middlewares/validar-jwt";
import { esAdminRole } from "../middlewares/validar-roles";


const router = Router();

router.get('/'
// ,
//     [
        
//     ]
, getMetodosAnaluz
);

router.get('/:id'
,
    [
         check('id','El id es obligatorio').not().isEmpty()
         , check('id').custom( existeMetodoAnaluzPorId )
        , validarCampos    
    ]
, getMetodoAnaluz
);


router.post('/'
,
    [
          validarJWT
        , esAdminRole
        , check('nombre').not().isEmpty()
        , check('descripcion').not().isEmpty()
        , check('nivel').isNumeric()
        , check('costo').isDecimal()
        , validarCampos    
  

    ]
, postMetodoAnaluz
);

router.put('/:id'
,
    [
        validarJWT
        , esAdminRole
        , check('id','El id es obligatorio').not().isEmpty()
        , check('id').custom( existeMetodoAnaluzPorId )
        , validarCampos   
    ]
, putMetodoAnaluz
);

router.delete('/:id'
,
    [
        validarJWT
        , esAdminRole
        , check('id','El id es obligatorio').not().isEmpty()
        , check('id').custom( existeMetodoAnaluzPorId )

        , validarCampos 
    ]
, deleteMetodoAnaluz
);



router.put('/:coleccion/:id'
,
    [
        validarJWT
        , esAdminRole
        , check('id','El id es obligatorio').not().isEmpty()
        , check('id').custom( existeMetodoAnaluzPorId)  
        , check('coleccion').custom(c=>coleccionesPermitidas
            (c,[
            'actualizar-imagen'
          
        ]) )
        , validarCampos   
    ],
    uploads_metodoAnaluz
    , 
putUploadImagen
);
router.get('/:coleccion/:id'
,
    [
        validarJWT
        , esAdminRole
        , check('id','El id es obligatorio').not().isEmpty()
        , check('id').custom( existeMetodoAnaluzPorId)  
        , check('coleccion').custom(c=>coleccionesPermitidas
            (c,[
            'obtener-imagen'
          
        ]) )
        , validarCampos   
    ],
    // uploads_metodoPago
    // , 
getUploadImagen
);




export default router;

