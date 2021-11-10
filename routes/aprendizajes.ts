import { Router } from "express";
import { check } from "express-validator";
import { deleteAprendizaje, getAprendizaje, getAprendizajes, postAprendizaje, putAprendizaje } from "../controllers/aprendizaje";
import { existeAprendizajePorId, existeClasePorId } from "../helpers/db-validatoe";
import { validarCampos } from "../middlewares/validar-campos";
import { validarJWT } from "../middlewares/validar-jwt";
import { esAdminRole } from "../middlewares/validar-roles";


const router = Router();

router.get('/'
,
    [
        validarJWT,
        validarCampos
    ]
, getAprendizajes
);

router.get('/:id'
,
    [
        validarJWT
        , check('id','El id es obligatorio').not().isEmpty()
        , check('id').custom( existeAprendizajePorId )
        , validarCampos    
    ]
, getAprendizaje
);


router.post('/'
,
    [
          validarJWT
        , esAdminRole
        , check('clase_id').not().isEmpty()
        , check('clase_id').custom( existeClasePorId )
        , validarCampos    
    ]
, postAprendizaje
);

router.put('/:id'
,
    [
        validarJWT
        , esAdminRole
        , check('id','El id es obligatorio').not().isEmpty()
        , check('id').custom( existeAprendizajePorId )
        , check('clase_id').not().isEmpty()
        , check('clase_id').custom( existeClasePorId )
        , validarCampos   
    ]
,   putAprendizaje
);

router.delete('/:id'
,
    [
        validarJWT
        , esAdminRole
        , check('id','El id es obligatorio').not().isEmpty()
        , check('id').custom( existeAprendizajePorId )
        , validarCampos 
    ]
, deleteAprendizaje
);

export default router;

