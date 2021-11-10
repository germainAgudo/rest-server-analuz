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
exports.deleteSanacion = exports.putSanacion = exports.postSanacion = exports.getSanacion = exports.getSanaciones = void 0;
const sanacion_1 = __importDefault(require("../models/sanacion"));
const getSanaciones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { estado: true };
    try {
        const [total, sanaciones] = yield Promise.all([
            sanacion_1.default.findAndCountAll({ where: query }).then(result => result.count),
            sanacion_1.default.findAll({ where: query })
        ]);
        res.json({
            total,
            sanaciones
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.getSanaciones = getSanaciones;
const getSanacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const sanacion = yield sanacion_1.default.findByPk(id);
        res.json(sanacion);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.getSanacion = getSanacion;
const postSanacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    const { body } = req;
    try {
        const { estado } = body, sanacionBody = __rest(body, ["estado"]);
        const { taller_id } = req.body;
        sanacionBody.usuario_id = (_a = req.usuario) === null || _a === void 0 ? void 0 : _a.id;
        const existe = yield sanacion_1.default.findOne({
            where: {
                taller_id: taller_id,
                usuario_id: (_b = req.usuario) === null || _b === void 0 ? void 0 : _b.id,
                estado: true
            }
        });
        if (existe) {
            return res.status(400).json({
                msg: `El usuario  ${(_c = req.usuario) === null || _c === void 0 ? void 0 : _c.id},  actualmente está inscrito en el taller: ${taller_id}`
            });
        }
        const sanacion = sanacion_1.default.build(sanacionBody);
        yield sanacion.save();
        res.json(sanacion);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postSanacion = postSanacion;
const putSanacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const { estado } = body, sanacionBody = __rest(body, ["estado"]);
        const sanacion = yield sanacion_1.default.findByPk(id);
        yield (sanacion === null || sanacion === void 0 ? void 0 : sanacion.update(sanacionBody));
        res.json(sanacion);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putSanacion = putSanacion;
const deleteSanacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _d, _e, _f;
    const { id } = req.params;
    try {
        const sanacion = yield sanacion_1.default.findByPk(id);
        if (((_d = req.usuario) === null || _d === void 0 ? void 0 : _d.id) != (sanacion === null || sanacion === void 0 ? void 0 : sanacion.getDataValue('usuario_id')) || ((_e = req.usuario) === null || _e === void 0 ? void 0 : _e.rol) != 'ADMIN') {
            res.status(401).json({
                msg: `El id ${(_f = req.usuario) === null || _f === void 0 ? void 0 : _f.id} no cuenta con los permisos necesarios - no puede hacer esto`
            });
        }
        yield (sanacion === null || sanacion === void 0 ? void 0 : sanacion.update({ estado: false }));
        return res.json(sanacion);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.deleteSanacion = deleteSanacion;
//# sourceMappingURL=sanacion.js.map