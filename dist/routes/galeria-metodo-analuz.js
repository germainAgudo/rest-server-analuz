"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const galeria_metodo_analuz_1 = require("../controllers/galeria-metodo-analuz");
const db_validatoe_1 = require("../helpers/db-validatoe");
const validar_campos_1 = require("../middlewares/validar-campos");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const validar_roles_1 = require("../middlewares/validar-roles");
const router = (0, express_1.Router)();
router.get('/'
// ,
//     [
//     ]
, galeria_metodo_analuz_1.getGaleriasMetodoAnaluz);
router.get('/:id', [
    (0, express_validator_1.check)('id', 'El id es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('id').custom(db_validatoe_1.existeGaleriaMetodoAnaluzPorId),
    validar_campos_1.validarCampos
], galeria_metodo_analuz_1.getGaleriaMetodoAnaluz);
router.post('', [
    validar_jwt_1.validarJWT,
    validar_roles_1.esAdminRole,
    (0, express_validator_1.check)('videourl', 'la dirección del video es obligatoria').not().isEmpty(),
    (0, express_validator_1.check)('metodoanaluz_id', 'el metodo ana luz es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('metodoanaluz_id').custom(db_validatoe_1.existeMetodoAnaluzPorId),
    validar_campos_1.validarCampos
], galeria_metodo_analuz_1.postGaleriaMetodoAnaluz);
router.put('/:id', [
    validar_jwt_1.validarJWT,
    validar_roles_1.esAdminRole,
    (0, express_validator_1.check)('id', 'El id es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('id').custom(db_validatoe_1.existeGaleriaMetodoAnaluzPorId),
    (0, express_validator_1.check)('videourl', 'la dirección del video es obligatoria').not().isEmpty(),
    validar_campos_1.validarCampos
], galeria_metodo_analuz_1.putGaleriaMetodoAnaluz);
router.delete('/:id', [
    validar_jwt_1.validarJWT,
    validar_roles_1.esAdminRole,
    (0, express_validator_1.check)('id', 'El id es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('id').custom(db_validatoe_1.existeGaleriaMetodoAnaluzPorId),
    validar_campos_1.validarCampos
], galeria_metodo_analuz_1.deleteGaleriaMetodoAnaluz);
exports.default = router;
//# sourceMappingURL=galeria-metodo-analuz.js.map