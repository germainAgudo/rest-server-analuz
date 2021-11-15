"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const galeria_taller_1 = require("../controllers/galeria-taller");
const db_validatoe_1 = require("../helpers/db-validatoe");
const galeria_uploads_1 = require("../helpers/galeria-uploads");
const validar_campos_1 = require("../middlewares/validar-campos");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const validar_roles_1 = require("../middlewares/validar-roles");
const router = (0, express_1.Router)();
router.get('/'
// ,
//     [
//     ]
, galeria_taller_1.getGaleriasTalleres);
router.get('/:id', [
    (0, express_validator_1.check)('id', 'El id es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('id').custom(db_validatoe_1.existeGaleriaTallerPorId),
    validar_campos_1.validarCampos
], galeria_taller_1.getGaleriaTaller);
router.post('/', [
    validar_jwt_1.validarJWT,
    validar_roles_1.esAdminRole,
    validar_campos_1.validarCampos
], galeria_uploads_1.uploads_galeria_taller, galeria_taller_1.postGaleriaTaller);
router.put('/:id', [
    validar_jwt_1.validarJWT,
    validar_roles_1.esAdminRole,
    (0, express_validator_1.check)('id', 'El id es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('id').custom(db_validatoe_1.existeGaleriaTallerPorId),
    validar_campos_1.validarCampos
], galeria_taller_1.putGaleriaTaller);
router.delete('/:id', [
    validar_jwt_1.validarJWT,
    validar_roles_1.esAdminRole,
    (0, express_validator_1.check)('id', 'El id es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('id').custom(db_validatoe_1.existeGaleriaTallerPorId),
    validar_campos_1.validarCampos
], galeria_taller_1.deleteGaleriaTaller);
exports.default = router;
//# sourceMappingURL=galeria-taller.js.map