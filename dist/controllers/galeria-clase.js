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
exports.deleteGaleriaClase = exports.putGaleriaClase = exports.postGaleriaClase = exports.getGaleriaClase = exports.getGaleriasClases = void 0;
const galeria_clase_1 = __importDefault(require("../models/galeria-clase"));
const getGaleriasClases = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { estado: true };
    try {
        const [total, galeria_clases] = yield Promise.all([
            galeria_clase_1.default.findAndCountAll({ where: query }).then(result => result.count),
            galeria_clase_1.default.findAll({ where: query })
            // , Seccion.findAll({ where:{ estado: true } })
        ]);
        res.json({
            total,
            galeria_clases
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.getGaleriasClases = getGaleriasClases;
const getGaleriaClase = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const galeria_clase = yield galeria_clase_1.default.findByPk(id);
        res.json(galeria_clase);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.getGaleriaClase = getGaleriaClase;
const postGaleriaClase = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const { estado } = body, galeriaClaseBody = __rest(body, ["estado"]);
        const galeria_clase = galeria_clase_1.default.build(galeriaClaseBody);
        yield galeria_clase.save();
        res.json(galeria_clase);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postGaleriaClase = postGaleriaClase;
const putGaleriaClase = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const { img } = body;
        const data = {
            img: img.trim()
        };
        const galeria_clase = yield galeria_clase_1.default.findByPk(id);
        yield (galeria_clase === null || galeria_clase === void 0 ? void 0 : galeria_clase.update(data));
        res.json(galeria_clase);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putGaleriaClase = putGaleriaClase;
const deleteGaleriaClase = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const galeria_clase = yield galeria_clase_1.default.findByPk(id);
        yield (galeria_clase === null || galeria_clase === void 0 ? void 0 : galeria_clase.update({ estado: false }));
        return res.json(galeria_clase);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.deleteGaleriaClase = deleteGaleriaClase;
//# sourceMappingURL=galeria-clase.js.map