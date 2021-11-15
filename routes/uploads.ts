import { Router } from "express";
import { check } from "express-validator";
import { 
    actualizarImagen, 
    // postUploadFile, 
    // uploads_archivo,  

} from "../controllers/uploads";
import { existeMetodoPagoPorId } from "../helpers/db-validatoe";
// import { uploads_metodoPago } from "../helpers/validar-uploads";
import { validarCampos } from "../middlewares/validar-campos";
import { coleccionesPermitidas } from "../middlewares/validar-informacion";
import { validarJWT } from "../middlewares/validar-jwt";
import { esAdminRole } from "../middlewares/validar-roles";


const router = Router();

// router.get('/'
// ,
//     [

//     ]
// ,
// );

// router.get('/'
// ,
//     [
//          check('id','El id es obligatorio').not().isEmpty()
//         , validarCampos    
//     ]
// ,
// );


// router.post('/'
// ,
//     [
//           validarJWT
//         , esAdminRole
//         , validarCampos    
//     ]
// ,  
// uploads_archivo,
// postUploadFile
// );





router.put('/:coleccion/:id'
,
    [
        validarJWT
        , esAdminRole
        , check('id','El id es obligatorio').not().isEmpty()
        , check('id').custom( existeMetodoPagoPorId)  
        , check('coleccion').custom(c=>coleccionesPermitidas
            (c,[
            'metodos-pagos'
            , 'usuario'
        ]) )
        , validarCampos   
    ],
    // uploads_metodoPago
  
  

actualizarImagen
);

// router.delete('/'
// ,
//     [
//         validarJWT
//         , esAdminRole
//         , check('id','El id es obligatorio').not().isEmpty()
//         , validarCampos 
//     ]
// ,
// );

export default router;

