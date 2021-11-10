"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const aprendizaje_1 = require("../controllers/aprendizaje");
const db_validatoe_1 = require("../helpers/db-validatoe");
const validar_campos_1 = require("../middlewares/validar-campos");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const validar_roles_1 = require("../middlewares/validar-roles");
const router = (0, express_1.Router)();
router.get('/', [
    validar_jwt_1.validarJWT,
    validar_campos_1.validarCampos
], aprendizaje_1.getAprendizajes);
router.get('/:id', [
    validar_jwt_1.validarJWT,
    (0, express_validator_1.check)('id', 'El id es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('id').custom(db_validatoe_1.existeAprendizajePorId),
    validar_campos_1.validarCampos
], aprendizaje_1.getAprendizaje);
router.post('/', [
    validar_jwt_1.validarJWT,
    validar_roles_1.esAdminRole,
    (0, express_validator_1.check)('clase_id').not().isEmpty(),
    (0, express_validator_1.check)('clase_id').custom(db_validatoe_1.existeClasePorId),
    validar_campos_1.validarCampos
], aprendizaje_1.postAprendizaje);
router.put('/:id', [
    validar_jwt_1.validarJWT,
    validar_roles_1.esAdminRole,
    (0, express_validator_1.check)('id', 'El id es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('id').custom(db_validatoe_1.existeAprendizajePorId),
    (0, express_validator_1.check)('clase_id').not().isEmpty(),
    (0, express_validator_1.check)('clase_id').custom(db_validatoe_1.existeClasePorId),
    validar_campos_1.validarCampos
], aprendizaje_1.putAprendizaje);
router.delete('/:id', [
    validar_jwt_1.validarJWT,
    validar_roles_1.esAdminRole,
    (0, express_validator_1.check)('id', 'El id es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('id').custom(db_validatoe_1.existeAprendizajePorId),
    validar_campos_1.validarCampos
], aprendizaje_1.deleteAprendizaje);
exports.default = router;
//# sourceMappingURL=aprendizajes.js.map