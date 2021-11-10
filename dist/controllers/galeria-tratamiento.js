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
exports.deleteGaleriaTratamiento = exports.putGaleriaTratamiento = exports.postGaleriaTratamiento = exports.getGaleriaTratamiento = exports.getGaleriasTratamiento = void 0;
const galeria_tratamiento_1 = __importDefault(require("../models/galeria-tratamiento"));
const getGaleriasTratamiento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { estado: true };
    try {
        const [total, galeriasTratamientos] = yield Promise.all([
            galeria_tratamiento_1.default.findAndCountAll({ where: query }).then(result => result.count),
            galeria_tratamiento_1.default.findAll({ where: query })
            // , Seccion.findAll({ where:{ estado: true } })
        ]);
        res.json({
            total,
            galeriasTratamientos
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.getGaleriasTratamiento = getGaleriasTratamiento;
const getGaleriaTratamiento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const galeria_tratamiento = yield galeria_tratamiento_1.default.findByPk(id);
        res.json(galeria_tratamiento);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.getGaleriaTratamiento = getGaleriaTratamiento;
const postGaleriaTratamiento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const { estado } = body, galeriaTratamientoBody = __rest(body, ["estado"]);
        const galeriaTratamiento = galeria_tratamiento_1.default.build(galeriaTratamientoBody);
        yield galeriaTratamiento.save();
        res.json(galeriaTratamiento);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postGaleriaTratamiento = postGaleriaTratamiento;
const putGaleriaTratamiento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const { img } = body;
        const data = {
            img: img.trim()
        };
        const galeriaTratamiento = yield galeria_tratamiento_1.default.findByPk(id);
        yield (galeriaTratamiento === null || galeriaTratamiento === void 0 ? void 0 : galeriaTratamiento.update(data));
        res.json(galeriaTratamiento);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putGaleriaTratamiento = putGaleriaTratamiento;
const deleteGaleriaTratamiento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const galeriaTratamiento = yield galeria_tratamiento_1.default.findByPk(id);
        yield (galeriaTratamiento === null || galeriaTratamiento === void 0 ? void 0 : galeriaTratamiento.update({ estado: false }));
        return res.json(galeriaTratamiento);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.deleteGaleriaTratamiento = deleteGaleriaTratamiento;
//# sourceMappingURL=galeria-tratamiento.js.map