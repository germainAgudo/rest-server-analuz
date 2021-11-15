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
exports.deleteMensualidadMetodo = exports.putMensualidadMetodo = exports.postMensualidadMetodo = exports.getMensualidadMetodo = exports.getMensualidadesMetodos = void 0;
const mensualidad_metodoanaluz_1 = __importDefault(require("../models/mensualidad-metodoanaluz"));
const getMensualidadesMetodos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { estado: true };
    try {
        const [total, mensualidades] = yield Promise.all([
            mensualidad_metodoanaluz_1.default.findAndCountAll({ where: query }).then(result => result.count),
            mensualidad_metodoanaluz_1.default.findAll({ where: query })
            // , Seccion.findAll({ where:{ estado: true } })
        ]);
        res.json({
            total,
            mensualidades
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.getMensualidadesMetodos = getMensualidadesMetodos;
const getMensualidadMetodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const mensualidad_metodo = yield mensualidad_metodoanaluz_1.default.findByPk(id);
        res.json(mensualidad_metodo);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.getMensualidadMetodo = getMensualidadMetodo;
const postMensualidadMetodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const { body } = req;
    try {
        const dias_restantes = 30;
        const { metodoanaluz_id } = body;
        const mensualidadMetodoBody = {
            metodoanaluz_id,
            dias_restantes,
            usuario_id: (_a = req.usuario) === null || _a === void 0 ? void 0 : _a.id
        };
        const mensualidad = yield mensualidad_metodoanaluz_1.default.findOne({
            where: {
                estado: true,
                usuario_id: (_b = req.usuario) === null || _b === void 0 ? void 0 : _b.id,
                metodoanaluz_id: metodoanaluz_id,
            }
        });
        if (mensualidad) {
            return res.status(400).json({
                msg: "Este usuario ya cuenta con una mensualidad vigente "
            });
        }
        const mensualidad_metodo = mensualidad_metodoanaluz_1.default.build(mensualidadMetodoBody);
        yield mensualidad_metodo.save();
        res.json(mensualidad_metodo);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postMensualidadMetodo = postMensualidadMetodo;
const putMensualidadMetodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const { estado, usuario_id, metodoanaluz_id } = body, mensualidadMetodoBody = __rest(body, ["estado", "usuario_id", "metodoanaluz_id"]);
        const mensualidad_metodo = yield mensualidad_metodoanaluz_1.default.findByPk(id);
        yield (mensualidad_metodo === null || mensualidad_metodo === void 0 ? void 0 : mensualidad_metodo.update(mensualidadMetodoBody));
        res.json(mensualidad_metodo);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putMensualidadMetodo = putMensualidadMetodo;
const deleteMensualidadMetodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const mensualidad_metodo = yield mensualidad_metodoanaluz_1.default.findByPk(id);
        yield (mensualidad_metodo === null || mensualidad_metodo === void 0 ? void 0 : mensualidad_metodo.update({ estado_mensualidad: true }));
        return res.json(mensualidad_metodo);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.deleteMensualidadMetodo = deleteMensualidadMetodo;
//# sourceMappingURL=mensualidad-metodo-analuz.js.map