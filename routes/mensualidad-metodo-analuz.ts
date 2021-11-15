import { Router } from "express";
import { check } from "express-validator";
import { 
    getMensualidadesMetodos 
    , getMensualidadMetodo
    , postMensualidadMetodo
    , putMensualidadMetodo
    , deleteMensualidadMetodo
} from "../controllers/mensualidad-metodo-analuz";
import { existeMensualidadMetodoAnaluzPorId, existeMetodoAnaluzPorId } from "../helpers/db-validatoe";
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
, getMensualidadesMetodos
);

router.get('/:id'
,
    [   validarJWT
        , check('id','El id es obligatorio').not().isEmpty()
        , check('id').custom( existeMensualidadMetodoAnaluzPorId )
        , validarCampos    
    ]
, getMensualidadMetodo
);


router.post('/'
,
    [
          validarJWT
        , esAdminRole
         ,check('metodoanaluz_id', ' El metodo analuz es obligatorio').not().isEmpty()
         ,check('metodoanaluz_id').custom(existeMetodoAnaluzPorId)
      
        , validarCampos 

    ]
, postMensualidadMetodo
);

router.put('/:id'
,
    [
        validarJWT
        , esAdminRole
        , check('id','El id es obligatorio').not().isEmpty()
        , check('id').custom( existeMensualidadMetodoAnaluzPorId )

        , validarCampos   
    ]
, putMensualidadMetodo
);

router.delete('/:id'
,
    [
        validarJWT
        , esAdminRole
        , check('id','El id es obligatorio').not().isEmpty()
        , check('id').custom( existeMensualidadMetodoAnaluzPorId )

        , validarCampos 
    ]
, deleteMensualidadMetodo
);

export default router;

