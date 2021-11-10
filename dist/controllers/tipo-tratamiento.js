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
exports.deleteTipoTratamiento = exports.putTipoTratamiento = exports.postTipoTratamiento = exports.getTipoTratamiento = exports.getTiposTratamientos = void 0;
const tipoTratamiento_1 = __importDefault(require("../models/tipoTratamiento"));
const getTiposTratamientos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { estado: true };
    try {
        const [total, tipos_tratamientos] = yield Promise.all([
            tipoTratamiento_1.default.findAndCountAll({ where: query }).then(result => result.count),
            tipoTratamiento_1.default.findAll({ where: query })
            // , Seccion.findAll({ where:{ estado: true } })
        ]);
        res.json({
            total,
            tipos_tratamientos
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.getTiposTratamientos = getTiposTratamientos;
const getTipoTratamiento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const tipo_tratamiento = yield tipoTratamiento_1.default.findByPk(id);
        res.json(tipo_tratamiento);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.getTipoTratamiento = getTipoTratamiento;
const postTipoTratamiento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const { nombre } = body;
        const data = {
            nombre: nombre.trim().ToUpperCase(),
        };
        const tipo_tratamiento = tipoTratamiento_1.default.build(data);
        yield tipo_tratamiento.save();
        res.json(tipo_tratamiento);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postTipoTratamiento = postTipoTratamiento;
const putTipoTratamiento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const { nombre } = body;
        const data = {
            nombre: nombre.trim().ToUpperCase(),
        };
        const tipo_tratamiento = yield tipoTratamiento_1.default.findByPk(id);
        yield (tipo_tratamiento === null || tipo_tratamiento === void 0 ? void 0 : tipo_tratamiento.update(data));
        res.json(tipo_tratamiento);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putTipoTratamiento = putTipoTratamiento;
const deleteTipoTratamiento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const metodoPago = yield tipoTratamiento_1.default.findByPk(id);
        yield (metodoPago === null || metodoPago === void 0 ? void 0 : metodoPago.update({ estado: false }));
        return res.json(metodoPago);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.deleteTipoTratamiento = deleteTipoTratamiento;
//# sourceMappingURL=tipo-tratamiento.js.map