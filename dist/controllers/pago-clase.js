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
exports.deletePagoClase = exports.putPagoClase = exports.postPagoClase = exports.getPagoClase = exports.getPagosClases = void 0;
const pago_clase_1 = __importDefault(require("../models/pago-clase"));
const getPagosClases = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { estado: true };
    try {
        const [total, pagosClases] = yield Promise.all([
            pago_clase_1.default.findAndCountAll({ where: query }).then(result => result.count),
            pago_clase_1.default.findAll({ where: query })
        ]);
        res.json({
            total,
            pagosClases
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.getPagosClases = getPagosClases;
const getPagoClase = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const pago_clase = yield pago_clase_1.default.findByPk(id);
        res.json(pago_clase);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.getPagoClase = getPagoClase;
const postPagoClase = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const { estado } = body, pagoClaseBody = __rest(body, ["estado"]);
        const pago_clase = pago_clase_1.default.build(pagoClaseBody);
        yield pago_clase.save();
        res.json(pago_clase);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postPagoClase = postPagoClase;
const putPagoClase = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const { estado } = body, pagoClaseBody = __rest(body, ["estado"]);
        const pago_clase = yield pago_clase_1.default.findByPk(id);
        yield (pago_clase === null || pago_clase === void 0 ? void 0 : pago_clase.update(pagoClaseBody));
        res.json(pago_clase);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putPagoClase = putPagoClase;
const deletePagoClase = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const pago_clase = yield pago_clase_1.default.findByPk(id);
        // if ( !seccion || !seccion.getDataValue('estado') ) {
        //     return  res.status(400).json({
        //         msg: `No existe una sección con el id: ${ id }`
        //     });    
        // }
        yield (pago_clase === null || pago_clase === void 0 ? void 0 : pago_clase.update({ estado: false }));
        return res.json(pago_clase);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.deletePagoClase = deletePagoClase;
//# sourceMappingURL=pago-clase.js.map