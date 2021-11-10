"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const usuarios_1 = require("../controllers/usuarios");
const db_validatoe_1 = require("../helpers/db-validatoe");
const validar_campos_1 = require("../middlewares/validar-campos");
const validar_informacion_1 = require("../middlewares/validar-informacion");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const validar_permisos_1 = require("../middlewares/validar-permisos");
const validar_roles_1 = require("../middlewares/validar-roles");
const router = (0, express_1.Router)();
router.get('/', [
    validar_jwt_1.validarJWT,
    validar_roles_1.esAdminRole
], usuarios_1.getUsuarios);
router.get('/:id', [
    validar_jwt_1.validarJWT,
    validar_permisos_1.validarPermisos,
    (0, express_validator_1.check)('id', 'El id es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('id').custom(db_validatoe_1.existeUsuarioPorId),
    validar_campos_1.validarCampos
], usuarios_1.getUsuario);
router.post('/', [
    (0, express_validator_1.check)('correo', 'El correo es obligatorio').isEmail(),
    (0, express_validator_1.check)('nombre', 'El nombre es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('numero_telefonico', 'El número telefonico es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('fecha_nacimiento', 'La fecha de nacimiento es obligatoria').not().isEmpty(),
    (0, express_validator_1.check)('sexo', 'El sexo es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('sexo').custom(s => (0, validar_informacion_1.coleccionesPermitidas)(s, ['h', 'm'])),
    (0, express_validator_1.check)('password', 'El password debe de ser de mas de 5 caracteres').isLength({ min: 6 }),
    validar_campos_1.validarCampos
], usuarios_1.postUsuario);
router.put('/:id', [
    validar_jwt_1.validarJWT,
    validar_permisos_1.validarPermisos,
    (0, express_validator_1.check)('id', 'El id es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('id').custom(db_validatoe_1.existeUsuarioPorId),
    validar_campos_1.validarCampos
], usuarios_1.putUsuario);
router.delete('/:id', [
    validar_jwt_1.validarJWT,
    validar_permisos_1.validarPermisos,
    (0, express_validator_1.check)('id', 'El id es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('id').custom(db_validatoe_1.existeUsuarioPorId),
    validar_campos_1.validarCampos
], usuarios_1.deleteUsuario);
exports.default = router;
//# sourceMappingURL=usuarios.js.map