"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const testimonios_1 = require("../controllers/testimonios");
const db_validatoe_1 = require("../helpers/db-validatoe");
const validar_campos_1 = require("../middlewares/validar-campos");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const router = (0, express_1.Router)();
router.get('/', testimonios_1.getTestimonios);
router.get('/:id', [
    (0, express_validator_1.check)('id', 'El id es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('id').custom(db_validatoe_1.existeTestimonioPorId),
    validar_campos_1.validarCampos
], testimonios_1.getTestimonio);
router.post('/', [
    validar_jwt_1.validarJWT,
    (0, express_validator_1.check)('testimonio', 'El testimonio es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('seccion_id').not().isEmpty(),
    (0, express_validator_1.check)('seccion_id').custom(db_validatoe_1.existeSeccionPorId),
    validar_campos_1.validarCampos
], testimonios_1.postTestimonio);
router.put('/:id', [
    validar_jwt_1.validarJWT,
    (0, express_validator_1.check)('id', 'El id es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('id').custom(db_validatoe_1.existeTestimonioPorId),
    (0, express_validator_1.check)('testimonio', 'El testimonio es obligatorio').not().isEmpty(),
    validar_campos_1.validarCampos
], testimonios_1.putTestimonio);
router.delete('/:id', [
    validar_jwt_1.validarJWT,
    (0, express_validator_1.check)('id', 'El id es obligatorio').not().isEmpty(),
    validar_campos_1.validarCampos
], testimonios_1.deleteTestimonio);
exports.default = router;
//# sourceMappingURL=testimonios.js.map