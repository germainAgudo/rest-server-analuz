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
exports.deleteGaleriaProducto = exports.putGaleriaProducto = exports.postGaleriaProducto = exports.getGaleriaProducto = exports.getGaleriasProductos = void 0;
const producto_1 = __importDefault(require("../models/producto"));
const getGaleriasProductos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { estado: true };
    try {
        const [total, galeriaProducto] = yield Promise.all([
            producto_1.default.findAndCountAll({ where: query }).then(result => result.count),
            producto_1.default.findAll({ where: query })
            // , Seccion.findAll({ where:{ estado: true } })
        ]);
        res.json({
            total,
            galeriaProducto
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.getGaleriasProductos = getGaleriasProductos;
const getGaleriaProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const galeria_producto = yield producto_1.default.findByPk(id);
        res.json(galeria_producto);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.getGaleriaProducto = getGaleriaProducto;
const postGaleriaProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const { estado } = body, galeriaProductoBody = __rest(body, ["estado"]);
        const galeriaProducto = producto_1.default.build(galeriaProductoBody);
        yield galeriaProducto.save();
        res.json(galeriaProducto);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postGaleriaProducto = postGaleriaProducto;
const putGaleriaProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const { img } = body;
        const data = {
            img: img.trim()
        };
        const galeriaProducto = yield producto_1.default.findByPk(id);
        yield (galeriaProducto === null || galeriaProducto === void 0 ? void 0 : galeriaProducto.update(data));
        res.json(galeriaProducto);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putGaleriaProducto = putGaleriaProducto;
const deleteGaleriaProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const galeriaProducto = yield producto_1.default.findByPk(id);
        yield (galeriaProducto === null || galeriaProducto === void 0 ? void 0 : galeriaProducto.update({ estado: false }));
        return res.json(galeriaProducto);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.deleteGaleriaProducto = deleteGaleriaProducto;
//# sourceMappingURL=galeria-producto.js.map