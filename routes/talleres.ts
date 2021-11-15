import { Router } from "express";
import { check } from "express-validator";
import { 
      getTalleres
    , getTaller
    , postTaller
    , putTaller
    , deleteTaller
 } from "../controllers/talleres";
import { existeTallerPorId } from "../helpers/db-validatoe";
import { validarCampos } from "../middlewares/validar-campos";
import { validarJWT } from "../middlewares/validar-jwt";
import { esAdminRole } from "../middlewares/validar-roles";


const router = Router();

router.get('/'

, getTalleres
);

router.get('/:id'
,
    [
         check('id','El id es obligatorio').not().isEmpty()
        , check('id').custom( existeTallerPorId )
        , validarCampos    
    ]
,   getTaller
);


router.post('/'
,
    [
          validarJWT
        , esAdminRole
        , check('nombre', 'El nombre es obligatorio').not().isEmpty()
        , check('descripcion', 'La descripción es obligatoria').not().isEmpty()
        , check('precio', 'El precio no es valido').isNumeric()
        , validarCampos    
    ]
, postTaller
);

router.put('/:id'
,
    [
        validarJWT
        , esAdminRole
        , check('id','El id es obligatorio').not().isEmpty()
        , check('id').custom( existeTallerPorId )
        , validarCampos   
    ]
,   putTaller
);

router.delete('/:id'
,
    [
        validarJWT
        , esAdminRole
        , check('id','El id es obligatorio').not().isEmpty()
        , check('id').custom( existeTallerPorId )
        , validarCampos 
    ]
, deleteTaller
);

export default router;




