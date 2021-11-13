"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const metodo_pago_1 = require("../controllers/metodo-pago");
const db_validatoe_1 = require("../helpers/db-validatoe");
const validar_uploads_1 = require("../helpers/validar-uploads");
const validar_campos_1 = require("../middlewares/validar-campos");
const validar_informacion_1 = require("../middlewares/validar-informacion");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const validar_roles_1 = require("../middlewares/validar-roles");
const router = (0, express_1.Router)();
router.get('/', [
    validar_jwt_1.validarJWT,
    validar_campos_1.validarCampos
], metodo_pago_1.getMetodosPagos);
router.get('/:id', [
    validar_jwt_1.validarJWT,
    (0, express_validator_1.check)('id', 'El id es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('id').custom(db_validatoe_1.existeMetodoPagoPorId),
    validar_campos_1.validarCampos
], metodo_pago_1.getMetodosPagos);
router.post('/', [
    validar_jwt_1.validarJWT,
    validar_roles_1.esAdminRole,
    (0, express_validator_1.check)('nombre', 'El nombre del metodo de pago es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('nombre').custom(db_validatoe_1.existeNombreMetodoPago),
    validar_campos_1.validarCampos
], metodo_pago_1.postMetodoPago);
router.put('/:id', [
    validar_jwt_1.validarJWT,
    validar_roles_1.esAdminRole,
    (0, express_validator_1.check)('id', 'El id es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('id').custom(db_validatoe_1.existeMetodoPagoPorId),
    (0, express_validator_1.check)('nombre').not().isEmpty(),
    validar_campos_1.validarCampos
], metodo_pago_1.putMetodoPago);
router.delete('/:id', [
    validar_jwt_1.validarJWT,
    validar_roles_1.esAdminRole,
    (0, express_validator_1.check)('id', 'El id es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('id').custom(db_validatoe_1.existeMetodoPagoPorId),
    validar_campos_1.validarCampos
], metodo_pago_1.deleteMetodoPago);
router.put('/:coleccion/:id', [
    validar_jwt_1.validarJWT,
    validar_roles_1.esAdminRole,
    (0, express_validator_1.check)('id', 'El id es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('id').custom(db_validatoe_1.existeMetodoPagoPorId),
    (0, express_validator_1.check)('coleccion').custom(c => (0, validar_informacion_1.coleccionesPermitidas)(c, [
        'actualizar-img'
    ])),
    validar_campos_1.validarCampos
], validar_uploads_1.uploads_metodoPago, metodo_pago_1.putUploadMetodoPago);
exports.default = router;
//# sourceMappingURL=metodo-pago.js.map