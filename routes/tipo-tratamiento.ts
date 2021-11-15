import { Router } from "express";
import { check } from "express-validator";
import { 
   getTiposTratamientos 
 , getTipoTratamiento
 , postTipoTratamiento 
 , putTipoTratamiento
 , deleteTipoTratamiento
} from "../controllers/tipo-tratamiento";
import { existeTipoTratamientoPorId } from "../helpers/db-validatoe";
import { validarCampos } from "../middlewares/validar-campos";
import { validarJWT } from "../middlewares/validar-jwt";
import { esAdminRole } from "../middlewares/validar-roles";


const router = Router();

router.get('/'
// ,
//     [
    
//     ]
, getTiposTratamientos
);

router.get('/:id'
,
    [
           check('id','El id es obligatorio').not().isEmpty()
         , check('id').custom( existeTipoTratamientoPorId )
         , validarCampos    
    ]
, getTipoTratamiento
);


router.post('/'
,
    [
          validarJWT
        , esAdminRole
        , check('nombre','El nombre del tratamiento es obligatorio').not().isEmpty()
        , validarCampos    
    ]
, postTipoTratamiento
);

router.put('/:id'
,
    [
        validarJWT
        , esAdminRole
        , check('id','El id es obligatorio').not().isEmpty()
        , check('id').custom( existeTipoTratamientoPorId )
        , check('nombre', 'El nombre del tratamiento es obligatorio').not().isEmpty()
        , validarCampos   
    ]
,   putTipoTratamiento
);

router.delete('/:id'
,
    [
        validarJWT
        , esAdminRole
        , check('id','El id es obligatorio').not().isEmpty()
        , check('id').custom( existeTipoTratamientoPorId )
        , validarCampos 
    ]
, deleteTipoTratamiento
);

export default router;

