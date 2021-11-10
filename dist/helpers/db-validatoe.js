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
exports.existeAprendizajePorId = exports.existeClasePorId = exports.existeTestimonioPorId = exports.existeSeccionPorId = exports.existeUsuarioPorId = void 0;
const aprendizaje_1 = __importDefault(require("../models/aprendizaje"));
const clase_1 = __importDefault(require("../models/clase"));
const seccion_1 = __importDefault(require("../models/seccion"));
const testimonio_1 = __importDefault(require("../models/testimonio"));
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
//# sourceMappingURL=db-validatoe.js.map