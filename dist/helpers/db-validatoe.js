"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.existeNombreMetodoPago = exports.existeTestimonioTratamientoPorId = exports.existeTestimonioTallerPorId = exports.existeTestimonioMetodoanaluzPorId = exports.existetestimonioProductoPorId = exports.existeTestimonioClasePorId = exports.existePagoTratamientoPorId = exports.existePagoTallerPorId = exports.existePagoMetodoAnaluzPorId = exports.existePagoClasePorId = exports.existePagoProductoPorId = exports.existePagoPorId = exports.existeProductoActuacontraPorId = exports.existeProductoBeneficioPorId = exports.existeActuaContraPorId = exports.existeBeneficioPorId = exports.existeGaleriaProductoPorId = exports.existeProductoPorId = exports.existeSanacionPorId = exports.existeHistorialClinicoPorId = exports.existeGaleriaTratamientoPorId = exports.existeGaleriaClasePorId = exports.existeGaleriaTallerPorId = exports.existeTallerPorId = exports.existeTratamientoPorId = exports.existeTipoTratamientoPorId = exports.existeMensualidadMetodoAnaluzPorId = exports.existeGaleriaMetodoAnaluzPorId = exports.existeMetodoAnaluzPorId = exports.existeMetodoPagoPorId = exports.existeAprendizajePorId = exports.existeClasePorId = exports.existeTestimonioPorId = exports.existeSeccionPorId = exports.existeUsuarioPorId = void 0;
const actua_contra_1 = __importDefault(require("../models/actua-contra"));
const aprendizaje_1 = __importDefault(require("../models/aprendizaje"));
const beneficio_1 = __importDefault(require("../models/beneficio"));
const clase_1 = __importDefault(require("../models/clase"));
const galeria_clase_1 = __importDefault(require("../models/galeria-clase"));
const galeria_metodo_analuz_1 = __importDefault(require("../models/galeria-metodo-analuz"));
const galeria_producto_1 = __importDefault(require("../models/galeria-producto"));
const galeria_taller_1 = __importDefault(require("../models/galeria-taller"));
const galeria_tratamiento_1 = __importDefault(require("../models/galeria-tratamiento"));
const historial_clinico_1 = __importDefault(require("../models/historial-clinico"));
const mensualidad_metodoanaluz_1 = __importDefault(require("../models/mensualidad-metodoanaluz"));
const metodo_analuz_1 = __importDefault(require("../models/metodo-analuz"));
const metodoPago_1 = __importDefault(require("../models/metodoPago"));
const pago_1 = __importDefault(require("../models/pago"));
const pago_clase_1 = __importDefault(require("../models/pago-clase"));
const pago_metodo_analuz_1 = __importDefault(require("../models/pago-metodo-analuz"));
const pago_producto_1 = __importDefault(require("../models/pago-producto"));
const pago_taller_1 = __importDefault(require("../models/pago-taller"));
const pago_tratamiento_1 = __importDefault(require("../models/pago-tratamiento"));
const producto_1 = __importDefault(require("../models/producto"));
const productoactuacontra_1 = __importDefault(require("../models/productoactuacontra"));
const productobeneficio_1 = __importDefault(require("../models/productobeneficio"));
const sanacion_1 = __importDefault(require("../models/sanacion"));
const seccion_1 = __importDefault(require("../models/seccion"));
const taller_1 = __importDefault(require("../models/taller"));
const testimonio_1 = __importDefault(require("../models/testimonio"));
const testimonio_clase_1 = __importDefault(require("../models/testimonio-clase"));
const testimonio_metodo_analuz_1 = __importDefault(require("../models/testimonio-metodo-analuz"));
const testimonio_producto_1 = __importDefault(require("../models/testimonio-producto"));
const testimonio_taller_1 = __importDefault(require("../models/testimonio-taller"));
const testimonio_tratamiento_1 = __importDefault(require("../models/testimonio-tratamiento"));
const tipoTratamiento_1 = __importDefault(require("../models/tipoTratamiento"));
const tratamiento_1 = __importDefault(require("../models/tratamiento"));
const usuario_1 = __importDefault(require("../models/usuario"));
const existeUsuarioPorId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const existeUsuario = yield usuario_1.default.findByPk(id);
    if (!existeUsuario) {
        throw new Error(`El id ${id} no existe`);
    }
});
exports.existeUsuarioPorId = existeUsuarioPorId;
const existeSeccionPorId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const existeSeccion = yield seccion_1.default.findByPk(id);
    if (!existeSeccion || !existeSeccion.getDataValue('estado')) {
        throw new Error(`El id ${id} no existe`);
    }
});
exports.existeSeccionPorId = existeSeccionPorId;
const existeTestimonioPorId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const existeTestimonio = yield testimonio_1.default.findByPk(id);
    if (!existeTestimonio || !existeTestimonio.getDataValue('estado')) {
        throw new Error(`El id ${id} no existe`);
    }
});
exports.existeTestimonioPorId = existeTestimonioPorId;
const existeClasePorId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const existeClase = yield clase_1.default.findByPk(id);
    if (!existeClase || !existeClase.getDataValue('estado')) {
        throw new Error(`El id ${id} no existe`);
    }
});
exports.existeClasePorId = existeClasePorId;
const existeAprendizajePorId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const existeAprendizaje = yield aprendizaje_1.default.findByPk(id);
    if (!existeAprendizaje || !existeAprendizaje.getDataValue('estado')) {
        throw new Error(`El id ${id} no existe`);
    }
});
exports.existeAprendizajePorId = existeAprendizajePorId;
const existeMetodoPagoPorId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const existe_id = yield metodoPago_1.default.findByPk(id);
    if (!existe_id || !existe_id.getDataValue('estado')) {
        throw new Error(`El id ${id} no existe`);
    }
});
exports.existeMetodoPagoPorId = existeMetodoPagoPorId;
const existeMetodoAnaluzPorId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const existe_id = yield metodo_analuz_1.default.findByPk(id);
    if (!existe_id || !existe_id.getDataValue('estado')) {
        throw new Error(`El id ${id} no existe`);
    }
});
exports.existeMetodoAnaluzPorId = existeMetodoAnaluzPorId;
const existeGaleriaMetodoAnaluzPorId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const existe_id = yield galeria_metodo_analuz_1.default.findByPk(id);
    if (!existe_id || !existe_id.getDataValue('estado')) {
        throw new Error(`El id ${id} no existe`);
    }
});
exports.existeGaleriaMetodoAnaluzPorId = existeGaleriaMetodoAnaluzPorId;
const existeMensualidadMetodoAnaluzPorId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const existe_id = yield mensualidad_metodoanaluz_1.default.findByPk(id);
    if (!existe_id || !existe_id.getDataValue('estado')) {
        throw new Error(`El id ${id} no existe`);
    }
});
exports.existeMensualidadMetodoAnaluzPorId = existeMensualidadMetodoAnaluzPorId;
const existeTipoTratamientoPorId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const existe_id = yield tipoTratamiento_1.default.findByPk(id);
    if (!existe_id || !existe_id.getDataValue('estado')) {
        throw new Error(`El id ${id} no existe`);
    }
});
exports.existeTipoTratamientoPorId = existeTipoTratamientoPorId;
const existeTratamientoPorId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const existe_id = yield tratamiento_1.default.findByPk(id);
    if (!existe_id || !existe_id.getDataValue('estado')) {
        throw new Error(`El id ${id} no existe`);
    }
});
exports.existeTratamientoPorId = existeTratamientoPorId;
const existeTallerPorId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const existe_id = yield taller_1.default.findByPk(id);
    if (!existe_id || !existe_id.getDataValue('estado')) {
        throw new Error(`El id ${id} no existe`);
    }
});
exports.existeTallerPorId = existeTallerPorId;
const existeGaleriaTallerPorId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const existe_id = yield galeria_taller_1.default.findByPk(id);
    if (!existe_id || !existe_id.getDataValue('estado')) {
        throw new Error(`El id ${id} no existe`);
    }
});
exports.existeGaleriaTallerPorId = existeGaleriaTallerPorId;
const existeGaleriaClasePorId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const existe_id = yield galeria_clase_1.default.findByPk(id);
    if (!existe_id || !existe_id.getDataValue('estado')) {
        throw new Error(`El id ${id} no existe`);
    }
});
exports.existeGaleriaClasePorId = existeGaleriaClasePorId;
const existeGaleriaTratamientoPorId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const existe_id = yield galeria_tratamiento_1.default.findByPk(id);
    if (!existe_id || !existe_id.getDataValue('estado')) {
        throw new Error(`El id ${id} no existe`);
    }
});
exports.existeGaleriaTratamientoPorId = existeGaleriaTratamientoPorId;
const existeHistorialClinicoPorId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const existe_id = yield historial_clinico_1.default.findByPk(id);
    if (!existe_id || !existe_id.getDataValue('estado')) {
        throw new Error(`El id ${id} no existe`);
    }
});
exports.existeHistorialClinicoPorId = existeHistorialClinicoPorId;
const existeSanacionPorId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const existe_id = yield sanacion_1.default.findByPk(id);
    if (!existe_id || !existe_id.getDataValue('estado')) {
        throw new Error(`El id ${id} no existe`);
    }
});
exports.existeSanacionPorId = existeSanacionPorId;
const existeProductoPorId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const existe_id = yield producto_1.default.findByPk(id);
    if (!existe_id || !existe_id.getDataValue('estado')) {
        throw new Error(`El id ${id} no existe`);
    }
});
exports.existeProductoPorId = existeProductoPorId;
const existeGaleriaProductoPorId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const existe_id = yield galeria_producto_1.default.findByPk(id);
    if (!existe_id || !existe_id.getDataValue('estado')) {
        throw new Error(`El id ${id} no existe`);
    }
});
exports.existeGaleriaProductoPorId = existeGaleriaProductoPorId;
const existeBeneficioPorId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const existe_id = yield beneficio_1.default.findByPk(id);
    if (!existe_id || !existe_id.getDataValue('estado')) {
        throw new Error(`El id ${id} no existe`);
    }
});
exports.existeBeneficioPorId = existeBeneficioPorId;
const existeActuaContraPorId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const existe_id = yield actua_contra_1.default.findByPk(id);
    if (!existe_id || !existe_id.getDataValue('estado')) {
        throw new Error(`El id ${id} no existe`);
    }
});
exports.existeActuaContraPorId = existeActuaContraPorId;
const existeProductoBeneficioPorId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const existe_id = yield productobeneficio_1.default.findByPk(id);
    if (!existe_id || !existe_id.getDataValue('estado')) {
        throw new Error(`El id ${id} no existe`);
    }
});
exports.existeProductoBeneficioPorId = existeProductoBeneficioPorId;
const existeProductoActuacontraPorId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const existe_id = yield productoactuacontra_1.default.findByPk(id);
    if (!existe_id || !existe_id.getDataValue('estado')) {
        throw new Error(`El id ${id} no existe`);
    }
});
exports.existeProductoActuacontraPorId = existeProductoActuacontraPorId;
const existePagoPorId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const existe_id = yield pago_1.default.findByPk(id);
    if (!existe_id || !existe_id.getDataValue('estado')) {
        throw new Error(`El id ${id} no existe`);
    }
});
exports.existePagoPorId = existePagoPorId;
const existePagoProductoPorId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const existe_id = yield pago_producto_1.default.findByPk(id);
    if (!existe_id || !existe_id.getDataValue('estado')) {
        throw new Error(`El id ${id} no existe`);
    }
});
exports.existePagoProductoPorId = existePagoProductoPorId;
const existePagoClasePorId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const existe_id = yield pago_clase_1.default.findByPk(id);
    if (!existe_id || !existe_id.getDataValue('estado')) {
        throw new Error(`El id ${id} no existe`);
    }
});
exports.existePagoClasePorId = existePagoClasePorId;
const existePagoMetodoAnaluzPorId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const existe_id = yield pago_metodo_analuz_1.default.findByPk(id);
    if (!existe_id || !existe_id.getDataValue('estado')) {
        throw new Error(`El id ${id} no existe`);
    }
});
exports.existePagoMetodoAnaluzPorId = existePagoMetodoAnaluzPorId;
const existePagoTallerPorId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const existe_id = yield pago_taller_1.default.findByPk(id);
    if (!existe_id || !existe_id.getDataValue('estado')) {
        throw new Error(`El id ${id} no existe`);
    }
});
exports.existePagoTallerPorId = existePagoTallerPorId;
const existePagoTratamientoPorId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const existe_id = yield pago_tratamiento_1.default.findByPk(id);
    if (!existe_id || !existe_id.getDataValue('estado')) {
        throw new Error(`El id ${id} no existe`);
    }
});
exports.existePagoTratamientoPorId = existePagoTratamientoPorId;
const existeTestimonioClasePorId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const existe_id = yield testimonio_clase_1.default.findByPk(id);
    if (!existe_id || !existe_id.getDataValue('estado')) {
        throw new Error(`El id ${id} no existe`);
    }
});
exports.existeTestimonioClasePorId = existeTestimonioClasePorId;
const existetestimonioProductoPorId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const existe_id = yield testimonio_producto_1.default.findByPk(id);
    if (!existe_id || !existe_id.getDataValue('estado')) {
        throw new Error(`El id ${id} no existe`);
    }
});
exports.existetestimonioProductoPorId = existetestimonioProductoPorId;
const existeTestimonioMetodoanaluzPorId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const existe_id = yield testimonio_metodo_analuz_1.default.findByPk(id);
    if (!existe_id || !existe_id.getDataValue('estado')) {
        throw new Error(`El id ${id} no existe`);
    }
});
exports.existeTestimonioMetodoanaluzPorId = existeTestimonioMetodoanaluzPorId;
const existeTestimonioTallerPorId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const existe_id = yield testimonio_taller_1.default.findByPk(id);
    if (!existe_id || !existe_id.getDataValue('estado')) {
        throw new Error(`El id ${id} no existe`);
    }
});
exports.existeTestimonioTallerPorId = existeTestimonioTallerPorId;
const existeTestimonioTratamientoPorId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const existe_id = yield testimonio_tratamiento_1.default.findByPk(id);
    if (!existe_id || !existe_id.getDataValue('estado')) {
        throw new Error(`El id ${id} no existe`);
    }
});
exports.existeTestimonioTratamientoPorId = existeTestimonioTratamientoPorId;
/**
 *
 */
const existeNombreMetodoPago = (nombre) => __awaiter(void 0, void 0, void 0, function* () {
    if (nombre == null) {
        throw new Error(`El nombre está vacio`);
    }
    const existe_nombreMetodoPago = yield metodoPago_1.default.findOne({
        where: {
            nombre: nombre.trim().toUpperCase(),
            estado: true
        }
    });
    if (existe_nombreMetodoPago) {
        throw new Error(`El nombre ${nombre} ya está registrado`);
    }
});
exports.existeNombreMetodoPago = existeNombreMetodoPago;
/* export const existePorId = async ( id : any ) => {

    const existe_id = await MetodoAnaluz.findByPk( id );
    if ( !existe_id || !existe_id.getDataValue('estado') ) {
        throw new Error(`El id ${ id } no existe`);
    }
}
 */
//# sourceMappingURL=db-validatoe.js.map