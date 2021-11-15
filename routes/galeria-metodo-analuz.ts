import { Router } from "express";
import { check } from "express-validator";
import { 
 getGaleriasMetodoAnaluz
, getGaleriaMetodoAnaluz
, postGaleriaMetodoAnaluz 
, putGaleriaMetodoAnaluz
, deleteGaleriaMetodoAnaluz
} from "../controllers/galeria-metodo-analuz";
import { existeGaleriaMetodoAnaluzPorId, existeMetodoAnaluzPorId } from "../helpers/db-validatoe";
import { validarCampos } from "../middlewares/validar-campos";
import { validarJWT } from "../middlewares/validar-jwt";
import { esAdminRole } from "../middlewares/validar-roles";


const router = Router();

router.get('/'
// ,
//     [
        
//     ]
, getGaleriasMetodoAnaluz
);

router.get('/:id'
,
    [
         check('id','El id es obligatorio').not().isEmpty()
        , check('id').custom( existeGaleriaMetodoAnaluzPorId )
        , validarCampos    
    ]
, getGaleriaMetodoAnaluz
);


router.post(''
,
    [
          validarJWT
          , esAdminRole
          , check('videourl', 'la dirección del video es obligatoria').not().isEmpty()
        , check('metodoanaluz_id', 'el metodo ana luz es obligatorio').not().isEmpty()
        , check('metodoanaluz_id').custom( existeMetodoAnaluzPorId )
        , validarCampos    
    ]
,    postGaleriaMetodoAnaluz
);

router.put('/:id'
,
    [
        validarJWT
        , esAdminRole
        , check('id','El id es obligatorio').not().isEmpty()
        , check('id').custom( existeGaleriaMetodoAnaluzPorId )
        , check('videourl', 'la dirección del video es obligatoria').not().isEmpty()
        , validarCampos   
    ]
, putGaleriaMetodoAnaluz
);

router.delete('/:id'
,
    [
        validarJWT
        , esAdminRole
        , check('id','El id es obligatorio').not().isEmpty()
        , check('id').custom( existeGaleriaMetodoAnaluzPorId )
        , validarCampos 
    ]
, deleteGaleriaMetodoAnaluz
);

export default router;

