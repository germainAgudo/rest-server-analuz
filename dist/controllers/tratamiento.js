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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTratamiento = exports.putTratamiento = exports.postTratamiento = exports.getTratamiento = exports.getTratamientos = void 0;
const tratamiento_1 = __importDefault(require("../models/tratamiento"));
const getTratamientos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { estado: true };
    try {
        const [total, tratamientos] = yield Promise.all([
            tratamiento_1.default.findAndCountAll({ where: query }).then(result => result.count),
            tratamiento_1.default.findAll({ where: query })
            // , Seccion.findAll({ where:{ estado: true } })
        ]);
        res.json({
            total,
            tratamientos
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.getTratamientos = getTratamientos;
const getTratamiento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const tratamiento = yield tratamiento_1.default.findByPk(id);
        res.json(tratamiento);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.getTratamiento = getTratamiento;
const postTratamiento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const { estado } = body, tratamientoBody = __rest(body, ["estado"]);
        const tratamiento = tratamiento_1.default.build(tratamientoBody);
        yield tratamiento.save();
        res.json({
            tratamiento
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postTratamiento = postTratamiento;
const putTratamiento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const { estado, tipotratamiento_id } = body, tratamientoBody = __rest(body, ["estado", "tipotratamiento_id"]);
        const tratamiento = yield tratamiento_1.default.findByPk(id);
        yield (tratamiento === null || tratamiento === void 0 ? void 0 : tratamiento.update(tratamientoBody));
        res.json(tratamiento);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putTratamiento = putTratamiento;
const deleteTratamiento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const tratamiento = yield tratamiento_1.default.findByPk(id);
        yield (tratamiento === null || tratamiento === void 0 ? void 0 : tratamiento.update({ estado: false }));
        return res.json(tratamiento);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.deleteTratamiento = deleteTratamiento;
//# sourceMappingURL=tratamiento.js.map