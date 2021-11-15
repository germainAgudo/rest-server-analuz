"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const tipo_tratamiento_1 = require("../controllers/tipo-tratamiento");
const db_validatoe_1 = require("../helpers/db-validatoe");
const validar_campos_1 = require("../middlewares/validar-campos");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const validar_roles_1 = require("../middlewares/validar-roles");
const router = (0, express_1.Router)();
router.get('/'
// ,
//     [
//     ]
, tipo_tratamiento_1.getTiposTratamientos);
router.get('/:id', [
    (0, express_validator_1.check)('id', 'El id es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('id').custom(db_validatoe_1.existeTipoTratamientoPorId),
    validar_campos_1.validarCampos
], tipo_tratamiento_1.getTipoTratamiento);
router.post('/', [
    validar_jwt_1.validarJWT,
    validar_roles_1.esAdminRole,
    (0, express_validator_1.check)('nombre', 'El nombre del tratamiento es obligatorio').not().isEmpty(),
    validar_campos_1.validarCampos
], tipo_tratamiento_1.postTipoTratamiento);
router.put('/:id', [
    validar_jwt_1.validarJWT,
    validar_roles_1.esAdminRole,
    (0, express_validator_1.check)('id', 'El id es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('id').custom(db_validatoe_1.existeTipoTratamientoPorId),
    (0, express_validator_1.check)('nombre', 'El nombre del tratamiento es obligatorio').not().isEmpty(),
    validar_campos_1.validarCampos
], tipo_tratamiento_1.putTipoTratamiento);
router.delete('/:id', [
    validar_jwt_1.validarJWT,
    validar_roles_1.esAdminRole,
    (0, express_validator_1.check)('id', 'El id es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('id').custom(db_validatoe_1.existeTipoTratamientoPorId),
    validar_campos_1.validarCampos
], tipo_tratamiento_1.deleteTipoTratamiento);
exports.default = router;
//# sourceMappingURL=tipo-tratamiento.js.map