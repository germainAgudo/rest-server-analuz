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
exports.deletePagoProducto = exports.putPagoProducto = exports.postPagoProducto = exports.getPagoProducto = exports.getPagosProductos = void 0;
const pago_producto_1 = __importDefault(require("../models/pago-producto"));
const getPagosProductos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { estado: true };
    try {
        const [total, pagosProducto] = yield Promise.all([
            pago_producto_1.default.findAndCountAll({ where: query }).then(result => result.count),
            pago_producto_1.default.findAll({ where: query })
        ]);
        res.json({
            total,
            pagosProducto
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.getPagosProductos = getPagosProductos;
const getPagoProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const pago_producto = yield pago_producto_1.default.findByPk(id);
        res.json(pago_producto);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.getPagoProducto = getPagoProducto;
const postPagoProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const { estado } = body, pagoProductoBody = __rest(body, ["estado"]);
        const pago_producto = pago_producto_1.default.build(pagoProductoBody);
        yield pago_producto.save();
        res.json(pago_producto);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postPagoProducto = postPagoProducto;
const putPagoProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const { estado } = body, pagoProductoBody = __rest(body, ["estado"]);
        const pago_producto = yield pago_producto_1.default.findByPk(id);
        yield (pago_producto === null || pago_producto === void 0 ? void 0 : pago_producto.update(pagoProductoBody));
        res.json(pago_producto);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putPagoProducto = putPagoProducto;
const deletePagoProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const pago_producto = yield pago_producto_1.default.findByPk(id);
        // if ( !seccion || !seccion.getDataValue('estado') ) {
        //     return  res.status(400).json({
        //         msg: `No existe una sección con el id: ${ id }`
        //     });    
        // }
        yield (pago_producto === null || pago_producto === void 0 ? void 0 : pago_producto.update({ estado: false }));
        return res.json(pago_producto);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.deletePagoProducto = deletePagoProducto;
//# sourceMappingURL=pago-producto.js.map