import { Router } from "express";
import { check } from "express-validator";
import { 
   getTratamientos 
 , getTratamiento
 , postTratamiento 
 , putTratamiento
 , deleteTratamiento
} from "../controllers/tratamiento";
import { existeTipoTratamientoPorId, existeTratamientoPorId } from "../helpers/db-validatoe";
import { validarCampos } from "../middlewares/validar-campos";
import { validarJWT } from "../middlewares/validar-jwt";
import { esAdminRole } from "../middlewares/validar-roles";


const router = Router();

router.get('/'
// ,
//     [
    
//     ]
, getTratamientos
);

router.get('/:id'
,
    [
           check('id','El id es obligatorio').not().isEmpty()
         , check('id').custom( existeTratamientoPorId )
         , validarCampos    
    ]
, getTratamiento
);


router.post('/'
,
    [
          validarJWT
        , esAdminRole
        , check('descripcion', 'La descripción es obligatoria').not().isEmpty()
        , check('precio','el precio es obligatorio').isNumeric()
        , check('tipotratamiento_id','El tipo de tratamiento es obligatorio').not().isEmpty()
        , check('tipotratamiento_id').custom( existeTipoTratamientoPorId )
        , validarCampos    
    ]
, postTratamiento
);

router.put('/:id'
,
    [
        validarJWT
        , esAdminRole
        , check('id','El id es obligatorio').not().isEmpty()
        , check('id').custom( existeTratamientoPorId )
       

        , validarCampos   
    ]
,   putTratamiento
);

router.delete('/:id'
,
    [
        validarJWT
        , esAdminRole
        , check('id','El id es obligatorio').not().isEmpty()
        , check('id').custom( existeTratamientoPorId )
        , validarCampos 
    ]
, deleteTratamiento
);

export default router;

