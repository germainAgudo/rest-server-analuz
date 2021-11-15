"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const tratamiento_1 = require("../controllers/tratamiento");
const db_validatoe_1 = require("../helpers/db-validatoe");
const validar_campos_1 = require("../middlewares/validar-campos");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const validar_roles_1 = require("../middlewares/validar-roles");
const router = (0, express_1.Router)();
router.get('/'
// ,
//     [
//     ]
, tratamiento_1.getTratamientos);
router.get('/:id', [
    (0, express_validator_1.check)('id', 'El id es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('id').custom(db_validatoe_1.existeTratamientoPorId),
    validar_campos_1.validarCampos
], tratamiento_1.getTratamiento);
router.post('/', [
    validar_jwt_1.validarJWT,
    validar_roles_1.esAdminRole,
    (0, express_validator_1.check)('descripcion', 'La descripción es obligatoria').not().isEmpty(),
    (0, express_validator_1.check)('precio', 'el precio es obligatorio').isNumeric(),
    (0, express_validator_1.check)('tipotratamiento_id', 'El tipo de tratamiento es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('tipotratamiento_id').custom(db_validatoe_1.existeTipoTratamientoPorId),
    validar_campos_1.validarCampos
], tratamiento_1.postTratamiento);
router.put('/:id', [
    validar_jwt_1.validarJWT,
    validar_roles_1.esAdminRole,
    (0, express_validator_1.check)('id', 'El id es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('id').custom(db_validatoe_1.existeTratamientoPorId),
    validar_campos_1.validarCampos
], tratamiento_1.putTratamiento);
router.delete('/:id', [
    validar_jwt_1.validarJWT,
    validar_roles_1.esAdminRole,
    (0, express_validator_1.check)('id', 'El id es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('id').custom(db_validatoe_1.existeTratamientoPorId),
    validar_campos_1.validarCampos
], tratamiento_1.deleteTratamiento);
exports.default = router;
//# sourceMappingURL=tratamiento.js.map