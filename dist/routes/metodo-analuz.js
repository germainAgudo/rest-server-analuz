"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const metodo_analuz_1 = require("../controllers/metodo-analuz");
const db_validatoe_1 = require("../helpers/db-validatoe");
const validar_uploads_1 = require("../helpers/validar-uploads");
const validar_campos_1 = require("../middlewares/validar-campos");
const validar_informacion_1 = require("../middlewares/validar-informacion");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const validar_roles_1 = require("../middlewares/validar-roles");
const router = (0, express_1.Router)();
router.get('/'
// ,
//     [
//     ]
, metodo_analuz_1.getMetodosAnaluz);
router.get('/:id', [
    (0, express_validator_1.check)('id', 'El id es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('id').custom(db_validatoe_1.existeMetodoAnaluzPorId),
    validar_campos_1.validarCampos
], metodo_analuz_1.getMetodoAnaluz);
router.post('/', [
    validar_jwt_1.validarJWT,
    validar_roles_1.esAdminRole,
    (0, express_validator_1.check)('nombre').not().isEmpty(),
    (0, express_validator_1.check)('descripcion').not().isEmpty(),
    (0, express_validator_1.check)('nivel').isNumeric(),
    (0, express_validator_1.check)('costo').isDecimal(),
    validar_campos_1.validarCampos
], metodo_analuz_1.postMetodoAnaluz);
router.put('/:id', [
    validar_jwt_1.validarJWT,
    validar_roles_1.esAdminRole,
    (0, express_validator_1.check)('id', 'El id es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('id').custom(db_validatoe_1.existeMetodoAnaluzPorId),
    validar_campos_1.validarCampos
], metodo_analuz_1.putMetodoAnaluz);
router.delete('/:id', [
    validar_jwt_1.validarJWT,
    validar_roles_1.esAdminRole,
    (0, express_validator_1.check)('id', 'El id es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('id').custom(db_validatoe_1.existeMetodoAnaluzPorId),
    validar_campos_1.validarCampos
], metodo_analuz_1.deleteMetodoAnaluz);
router.put('/:coleccion/:id', [
    validar_jwt_1.validarJWT,
    validar_roles_1.esAdminRole,
    (0, express_validator_1.check)('id', 'El id es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('id').custom(db_validatoe_1.existeMetodoAnaluzPorId),
    (0, express_validator_1.check)('coleccion').custom(c => (0, validar_informacion_1.coleccionesPermitidas)(c, [
        'actualizar-imagen'
    ])),
    validar_campos_1.validarCampos
], validar_uploads_1.uploads_metodoAnaluz, metodo_analuz_1.putUploadImagen);
router.get('/:coleccion/:id', [
    validar_jwt_1.validarJWT,
    validar_roles_1.esAdminRole,
    (0, express_validator_1.check)('id', 'El id es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('id').custom(db_validatoe_1.existeMetodoAnaluzPorId),
    (0, express_validator_1.check)('coleccion').custom(c => (0, validar_informacion_1.coleccionesPermitidas)(c, [
        'obtener-imagen'
    ])),
    validar_campos_1.validarCampos
], 
// uploads_metodoPago
// , 
metodo_analuz_1.getUploadImagen);
exports.default = router;
//# sourceMappingURL=metodo-analuz.js.map