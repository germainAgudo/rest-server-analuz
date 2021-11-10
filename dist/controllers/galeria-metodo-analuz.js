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
exports.deleteGaleriaMetodoAnaluz = exports.putGaleriaMetodoAnaluz = exports.postGaleriaMetodoAnaluz = exports.getGaleriaMetodoAnaluz = exports.getGaleriasMetodoAnaluz = void 0;
const galeria_metodo_analuz_1 = __importDefault(require("../models/galeria-metodo-analuz"));
const getGaleriasMetodoAnaluz = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { estado: true };
    try {
        const [total, galeriaMetodosAnaluz] = yield Promise.all([
            galeria_metodo_analuz_1.default.findAndCountAll({ where: query }).then(result => result.count),
            galeria_metodo_analuz_1.default.findAll({ where: query })
            // , Seccion.findAll({ where:{ estado: true } })
        ]);
        res.json({
            total,
            galeriaMetodosAnaluz
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.getGaleriasMetodoAnaluz = getGaleriasMetodoAnaluz;
const getGaleriaMetodoAnaluz = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const galeria_metodo = yield galeria_metodo_analuz_1.default.findByPk(id);
        res.json(galeria_metodo);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.getGaleriaMetodoAnaluz = getGaleriaMetodoAnaluz;
const postGaleriaMetodoAnaluz = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const { estado } = body, galeriaMetodoBody = __rest(body, ["estado"]);
        const galeriaMetodo = galeria_metodo_analuz_1.default.build(galeriaMetodoBody);
        yield galeriaMetodo.save();
        res.json(galeriaMetodo);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postGaleriaMetodoAnaluz = postGaleriaMetodoAnaluz;
const putGaleriaMetodoAnaluz = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const { videourl } = body;
        const data = {
            videourl: videourl.trim()
        };
        const galeriaMetodo = yield galeria_metodo_analuz_1.default.findByPk(id);
        yield (galeriaMetodo === null || galeriaMetodo === void 0 ? void 0 : galeriaMetodo.update(data));
        res.json(galeriaMetodo);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putGaleriaMetodoAnaluz = putGaleriaMetodoAnaluz;
const deleteGaleriaMetodoAnaluz = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const galeriaMetodo = yield galeria_metodo_analuz_1.default.findByPk(id);
        yield (galeriaMetodo === null || galeriaMetodo === void 0 ? void 0 : galeriaMetodo.update({ estado: false }));
        return res.json(galeriaMetodo);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.deleteGaleriaMetodoAnaluz = deleteGaleriaMetodoAnaluz;
//# sourceMappingURL=galeria-metodo-analuz.js.map