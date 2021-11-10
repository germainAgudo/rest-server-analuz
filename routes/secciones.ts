import { Router } from "express";
import { check } from "express-validator";
import { deleteSeccion, getSeccion, getSecciones, postSeccion, putSeccion } from "../controllers/secciones";
import { existeSeccionPorId } from "../helpers/db-validatoe";
import { validarCampos } from "../middlewares/validar-campos";
import { validarJWT } from "../middlewares/validar-jwt";
import { esAdminRole } from "../middlewares/validar-roles";




const router = Router();

router.get('/',

getSecciones
);

router.get('/:id'
,
[
      // validarJWT,
     check('id', 'El id es obligatorio').not().isEmpty()
    , check('id').custom( existeSeccionPorId )
    , validarCampos
]
, getSeccion
);


router.post('/'
, 
[
    validarJWT
    , esAdminRole
    , check('nombre', 'El nombre es obligatorio').not().isEmpty()
    , validarCampos
     
]
, postSeccion
);


router.put('/:id'
,
[
  validarJWT
  , esAdminRole
, check('id', 'El id es obligatorio').not().isEmpty()
, check('id').custom( existeSeccionPorId )
, validarCampos
]
, putSeccion
);

router.delete('/:id'
,
[
    validarJWT
    , esAdminRole
    , check('id', 'El id es obligatorio').not().isEmpty()
    , check('id').custom( existeSeccionPorId )
    , validarCampos
]
, deleteSeccion
);


export default router;

