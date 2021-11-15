"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const uploads_1 = require("../controllers/uploads");
const db_validatoe_1 = require("../helpers/db-validatoe");
// import { uploads_metodoPago } from "../helpers/validar-uploads";
const validar_campos_1 = require("../middlewares/validar-campos");
const validar_informacion_1 = require("../middlewares/validar-informacion");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const validar_roles_1 = require("../middlewares/validar-roles");
const router = (0, express_1.Router)();
// router.get('/'
// ,
//     [
//     ]
// ,
// );
// router.get('/'
// ,
//     [
//          check('id','El id es obligatorio').not().isEmpty()
//         , validarCampos    
//     ]
// ,
// );
// router.post('/'
// ,
//     [
//           validarJWT
//         , esAdminRole
//         , validarCampos    
//     ]
// ,  
// uploads_archivo,
// postUploadFile
// );
router.put('/:coleccion/:id', [
    validar_jwt_1.validarJWT,
    validar_roles_1.esAdminRole,
    (0, express_validator_1.check)('id', 'El id es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('id').custom(db_validatoe_1.existeMetodoPagoPorId),
    (0, express_validator_1.check)('coleccion').custom(c => (0, validar_informacion_1.coleccionesPermitidas)(c, [
        'metodos-pagos',
        'usuario'
    ])),
    validar_campos_1.validarCampos
], 
// uploads_metodoPago
uploads_1.actualizarImagen);
// router.delete('/'
// ,
//     [
//         validarJWT
//         , esAdminRole
//         , check('id','El id es obligatorio').not().isEmpty()
//         , validarCampos 
//     ]
// ,
// );
exports.default = router;
//# sourceMappingURL=uploads.js.map