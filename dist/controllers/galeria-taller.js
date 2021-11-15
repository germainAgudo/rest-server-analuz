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
exports.deleteGaleriaTaller = exports.putGaleriaTaller = exports.postGaleriaTaller = exports.getGaleriaTaller = exports.getGaleriasTalleres = void 0;
const galeria_taller_1 = __importDefault(require("../models/galeria-taller"));
// import path from "path";
const fs_1 = __importDefault(require("fs"));
const taller_1 = __importDefault(require("../models/taller"));
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
        if (!req.file) {
            return res.status(400).json({
                msg: `La imagen es obligatoria`
            });
        }
        if (!body.taller_id) {
            const pathImagen = req.file.path;
            if (fs_1.default.existsSync(pathImagen)) {
                fs_1.default.unlinkSync(pathImagen);
            }
            return res.status(400).json({
                msg: `El taller es obligatorio`
            });
        }
        const { taller_id } = body;
        const existe_id = yield taller_1.default.findByPk(taller_id);
        if (!existe_id || !existe_id.getDataValue('estado')) {
            const pathImagen = req.file.path;
            if (fs_1.default.existsSync(pathImagen)) {
                fs_1.default.unlinkSync(pathImagen);
            }
            return res.status(400).json({
                msg: `El id ${taller_id} no existe`
            });
        }
        const galeriaTallerBody = {
            taller_id,
            img: req.file.path
        };
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