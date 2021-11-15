import { Router } from "express";
import { check } from "express-validator";
import { 
      getGaleriasTalleres 
    , getGaleriaTaller
    , postGaleriaTaller
    , putGaleriaTaller
    , deleteGaleriaTaller
} from "../controllers/galeria-taller";
import { existeGaleriaTallerPorId } from "../helpers/db-validatoe";
import { uploads_galeria_taller } from "../helpers/galeria-uploads";
import { validarCampos } from "../middlewares/validar-campos";
import { validarJWT } from "../middlewares/validar-jwt";
import { esAdminRole } from "../middlewares/validar-roles";


const router = Router();

router.get('/'
// ,
//     [

//     ]
, getGaleriasTalleres
);

router.get('/:id'
,
    [
         check('id','El id es obligatorio').not().isEmpty()
        , check('id').custom( existeGaleriaTallerPorId )
        , validarCampos    
    ]
,   getGaleriaTaller
);


router.post('/'
,
    [
          validarJWT
        , esAdminRole
    
        , validarCampos    
    ]
, uploads_galeria_taller  
, postGaleriaTaller
);

router.put('/:id'
,
    [
        validarJWT
        , esAdminRole
        , check('id','El id es obligatorio').not().isEmpty()
        , check('id').custom( existeGaleriaTallerPorId )
        , validarCampos   
    ]
,   putGaleriaTaller
);

router.delete('/:id'
,
    [
        validarJWT
        , esAdminRole
        , check('id','El id es obligatorio').not().isEmpty()
        , check('id').custom( existeGaleriaTallerPorId )
        , validarCampos 
    ]
,   deleteGaleriaTaller
);

export default router;

