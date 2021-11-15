"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const talleres_1 = require("../controllers/talleres");
const db_validatoe_1 = require("../helpers/db-validatoe");
const validar_campos_1 = require("../middlewares/validar-campos");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const validar_roles_1 = require("../middlewares/validar-roles");
const router = (0, express_1.Router)();
router.get('/', talleres_1.getTalleres);
router.get('/:id', [
    (0, express_validator_1.check)('id', 'El id es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('id').custom(db_validatoe_1.existeTallerPorId),
    validar_campos_1.validarCampos
], talleres_1.getTaller);
router.post('/', [
    validar_jwt_1.validarJWT,
    validar_roles_1.esAdminRole,
    (0, express_validator_1.check)('nombre', 'El nombre es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('descripcion', 'La descripción es obligatoria').not().isEmpty(),
    (0, express_validator_1.check)('precio', 'El precio no es valido').isNumeric(),
    validar_campos_1.validarCampos
], talleres_1.postTaller);
router.put('/:id', [
    validar_jwt_1.validarJWT,
    validar_roles_1.esAdminRole,
    (0, express_validator_1.check)('id', 'El id es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('id').custom(db_validatoe_1.existeTallerPorId),
    validar_campos_1.validarCampos
], talleres_1.putTaller);
router.delete('/:id', [
    validar_jwt_1.validarJWT,
    validar_roles_1.esAdminRole,
    (0, express_validator_1.check)('id', 'El id es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('id').custom(db_validatoe_1.existeTallerPorId),
    validar_campos_1.validarCampos
], talleres_1.deleteTaller);
exports.default = router;
//# sourceMappingURL=talleres.js.map