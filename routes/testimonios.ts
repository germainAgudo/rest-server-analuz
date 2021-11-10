import { Router } from "express";
import { check } from "express-validator";
import { deleteTestimonio, getTestimonio, getTestimonios, postTestimonio, putTestimonio } from "../controllers/testimonios";
import { existeSeccionPorId, existeTestimonioPorId } from "../helpers/db-validatoe";
import { validarCampos } from "../middlewares/validar-campos";
import { validarJWT } from "../middlewares/validar-jwt";
import { esAdminRole } from "../middlewares/validar-roles";


const router = Router();

router.get('/'
, getTestimonios
);

router.get('/:id'
,
    [
         check('id','El id es obligatorio').not().isEmpty()
        , check('id').custom( existeTestimonioPorId )  
        , validarCampos    
    ]
,   getTestimonio
);


router.post('/'
,
    [
          validarJWT
        , check('testimonio', 'El testimonio es obligatorio').not().isEmpty()  
        , check('seccion_id').not().isEmpty()  
        , check('seccion_id').custom( existeSeccionPorId )
        
        , validarCampos    
    ]
, postTestimonio
);

router.put('/:id'
,
    [
        validarJWT
        
        , check('id','El id es obligatorio').not().isEmpty()
        , check('id').custom( existeTestimonioPorId )
        , check('testimonio', 'El testimonio es obligatorio').not().isEmpty()  
        , validarCampos   
    ]
, putTestimonio
);

router.delete('/:id'
,
    [
        validarJWT
        
        , check('id','El id es obligatorio').not().isEmpty()
        , validarCampos 
    ]
, deleteTestimonio
);

export default router;

