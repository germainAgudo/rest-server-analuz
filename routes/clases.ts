import { Router } from "express";
import { check } from "express-validator";
import { deleteClase, getClase, getClases, postClase, putClase } from "../controllers/clases";
import { existeClasePorId } from "../helpers/db-validatoe";
import { validarCampos } from "../middlewares/validar-campos";
import { validarJWT } from "../middlewares/validar-jwt";
import { esAdminRole } from "../middlewares/validar-roles";


const router = Router();

router.get('/'

, getClases
);

router.get('/:id'
,
    [
         check('id','El id es obligatorio').not().isEmpty()
        , check('id').custom( existeClasePorId )
        , validarCampos    
    ]
,   getClase
);


router.post('/'
,
    [
          validarJWT
        , esAdminRole
        , check('nombre', 'El nombre es obligatorio').not().isEmpty()
        , check('descripcion', 'La descripción es obligatoria').not().isEmpty()
        , validarCampos    
    ]
, postClase
);

router.put('/:id'
,
    [
        validarJWT
        , esAdminRole
        , check('id','El id es obligatorio').not().isEmpty()
        , check('id').custom( existeClasePorId )
        , validarCampos   
    ]
,   putClase
);

router.delete('/:id'
,
    [
        validarJWT
        , esAdminRole
        , check('id','El id es obligatorio').not().isEmpty()
        , check('id').custom( existeClasePorId )
        , validarCampos 
    ]
, deleteClase
);

export default router;




