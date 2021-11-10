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
exports.deleteGaleriaTaller = exports.putGaleriaTaller = exports.postGaleriaTaller = exports.getGaleriaTaller = exports.getGaleriasTalleres = void 0;
const galeria_taller_1 = __importDefault(require("../models/galeria-taller"));
const getGaleriasTalleres = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { estado: true };
    try {
        const [total, galeriaTalleres] = yield Promise.all([
            galeria_taller_1.default.findAndCountAll({ where: query }).then(result => result.count),
            galeria_taller_1.default.findAll({ where: query })
            // , Seccion.findAll({ where:{ estado: true } })
        ]);
        res.json({
            total,
            galeriaTalleres
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.getGaleriasTalleres = getGaleriasTalleres;
const getGaleriaTaller = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const galeria_taller = yield galeria_taller_1.default.findByPk(id);
        res.json(galeria_taller);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.getGaleriaTaller = getGaleriaTaller;
const postGaleriaTaller = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const { estado } = body, galeriaTallerBody = __rest(body, ["estado"]);
        const galeriaTaller = galeria_taller_1.default.build(galeriaTallerBody);
        yield galeriaTaller.save();
        res.json(galeriaTaller);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postGaleriaTaller = postGaleriaTaller;
const putGaleriaTaller = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const { img } = body;
        const data = {
            img: img.trim()
        };
        const galeriaTaller = yield galeria_taller_1.default.findByPk(id);
        yield (galeriaTaller === null || galeriaTaller === void 0 ? void 0 : galeriaTaller.update(data));
        res.json(galeriaTaller);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putGaleriaTaller = putGaleriaTaller;
const deleteGaleriaTaller = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const galeriaTaller = yield galeria_taller_1.default.findByPk(id);
        yield (galeriaTaller === null || galeriaTaller === void 0 ? void 0 : galeriaTaller.update({ estado: false }));
        return res.json(galeriaTaller);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.deleteGaleriaTaller = deleteGaleriaTaller;
//# sourceMappingURL=galeria-taller.js.map