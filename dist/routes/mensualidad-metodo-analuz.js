"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const mensualidad_metodo_analuz_1 = require("../controllers/mensualidad-metodo-analuz");
const db_validatoe_1 = require("../helpers/db-validatoe");
const validar_campos_1 = require("../middlewares/validar-campos");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const validar_roles_1 = require("../middlewares/validar-roles");
const router = (0, express_1.Router)();
router.get('/', [
    validar_jwt_1.validarJWT,
    validar_campos_1.validarCampos
], mensualidad_metodo_analuz_1.getMensualidadesMetodos);
router.get('/:id', [validar_jwt_1.validarJWT,
    (0, express_validator_1.check)('id', 'El id es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('id').custom(db_validatoe_1.existeMensualidadMetodoAnaluzPorId),
    validar_campos_1.validarCampos
], mensualidad_metodo_analuz_1.getMensualidadMetodo);
router.post('/', [
    validar_jwt_1.validarJWT,
    validar_roles_1.esAdminRole,
    (0, express_validator_1.check)('metodoanaluz_id', ' El metodo analuz es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('metodoanaluz_id').custom(db_validatoe_1.existeMetodoAnaluzPorId),
    validar_campos_1.validarCampos
], mensualidad_metodo_analuz_1.postMensualidadMetodo);
router.put('/:id', [
    validar_jwt_1.validarJWT,
    validar_roles_1.esAdminRole,
    (0, express_validator_1.check)('id', 'El id es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('id').custom(db_validatoe_1.existeMensualidadMetodoAnaluzPorId),
    validar_campos_1.validarCampos
], mensualidad_metodo_analuz_1.putMensualidadMetodo);
router.delete('/:id', [
    validar_jwt_1.validarJWT,
    validar_roles_1.esAdminRole,
    (0, express_validator_1.check)('id', 'El id es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('id').custom(db_validatoe_1.existeMensualidadMetodoAnaluzPorId),
    validar_campos_1.validarCampos
], mensualidad_metodo_analuz_1.deleteMensualidadMetodo);
exports.default = router;
//# sourceMappingURL=mensualidad-metodo-analuz.js.map