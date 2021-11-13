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
exports.deletePagoTaller = exports.putPagoTaller = exports.postTaller = exports.getPagoTaller = exports.getPagosTalleres = void 0;
const pago_taller_1 = __importDefault(require("../models/pago-taller"));
const getPagosTalleres = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { estado: true };
    try {
        const [total, pagos_talleres] = yield Promise.all([
            pago_taller_1.default.findAndCountAll({ where: query }).then(result => result.count),
            pago_taller_1.default.findAll({ where: query })
        ]);
        res.json({
            total,
            pagos_talleres
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.getPagosTalleres = getPagosTalleres;
const getPagoTaller = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const pago_taller = yield pago_taller_1.default.findByPk(id);
        res.json(pago_taller);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.getPagoTaller = getPagoTaller;
const postTaller = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const { estado } = body, pagoTallerBody = __rest(body, ["estado"]);
        const pago_taller = pago_taller_1.default.build(pagoTallerBody);
        yield pago_taller.save();
        res.json(pago_taller);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postTaller = postTaller;
const putPagoTaller = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const { estado } = body, pagoTallerBody = __rest(body, ["estado"]);
        const pago_taller = yield pago_taller_1.default.findByPk(id);
        yield (pago_taller === null || pago_taller === void 0 ? void 0 : pago_taller.update(pagoTallerBody));
        res.json(pago_taller);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putPagoTaller = putPagoTaller;
const deletePagoTaller = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const pago_taller = yield pago_taller_1.default.findByPk(id);
        // if ( !seccion || !seccion.getDataValue('estado') ) {
        //     return  res.status(400).json({
        //         msg: `No existe una sección con el id: ${ id }`
        //     });    
        // }
        yield (pago_taller === null || pago_taller === void 0 ? void 0 : pago_taller.update({ estado: false }));
        return res.json(pago_taller);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.deletePagoTaller = deletePagoTaller;
//# sourceMappingURL=pago-taller.js.map