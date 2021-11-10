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
exports.deleteHistorialClinico = exports.putHistorialClinico = exports.postHistorialClinico = exports.getHistorialClinico = exports.getHistorialesClinicos = void 0;
const historial_clinico_1 = __importDefault(require("../models/historial-clinico"));
const getHistorialesClinicos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { estado: true };
    try {
        const [total, historiales_clinicos] = yield Promise.all([
            historial_clinico_1.default.findAndCountAll({ where: query }).then(result => result.count),
            historial_clinico_1.default.findAll({ where: query })
        ]);
        res.json({
            total,
            historiales_clinicos
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.getHistorialesClinicos = getHistorialesClinicos;
const getHistorialClinico = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const historial_clinico = yield historial_clinico_1.default.findByPk(id);
        res.json(historial_clinico);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.getHistorialClinico = getHistorialClinico;
const postHistorialClinico = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const { estado } = body, historialBody = __rest(body, ["estado"]);
        // const {tratamiento_id} = req.body;
        // historialBody.usuario_id=req.usuario?.id
        // const existe = await  HistorialClinico.findOne({
        //     where:{
        //         tratamiento_id: tratamiento_id 
        //         ,usuario_id :req.usuario?.id
        //         , estado:true
        //     }
        // });
        // if (existe) {
        //     return res.status(400).json({
        //         msg: `El usuario  ${ req.usuario?.id }  el tratamiento ${ tratamiento_id }`
        //     })
        // }
        const historial_clinico = historial_clinico_1.default.build(historialBody);
        yield historial_clinico.save();
        res.json(historial_clinico);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postHistorialClinico = postHistorialClinico;
const putHistorialClinico = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const { estado } = body, historialBody = __rest(body, ["estado"]);
        const historial_clinico = yield historial_clinico_1.default.findByPk(id);
        yield (historial_clinico === null || historial_clinico === void 0 ? void 0 : historial_clinico.update(historialBody));
        res.json(historial_clinico);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putHistorialClinico = putHistorialClinico;
const deleteHistorialClinico = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    const { id } = req.params;
    try {
        const historial_clinico = yield historial_clinico_1.default.findByPk(id);
        if (((_a = req.usuario) === null || _a === void 0 ? void 0 : _a.id) != (historial_clinico === null || historial_clinico === void 0 ? void 0 : historial_clinico.getDataValue('usuario_id')) || ((_b = req.usuario) === null || _b === void 0 ? void 0 : _b.rol) != 'ADMIN') {
            res.status(401).json({
                msg: `El id ${(_c = req.usuario) === null || _c === void 0 ? void 0 : _c.id} no cuenta con los permisos necesarios - no puede hacer esto`
            });
        }
        yield (historial_clinico === null || historial_clinico === void 0 ? void 0 : historial_clinico.update({ estado: false }));
        return res.json(historial_clinico);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.deleteHistorialClinico = deleteHistorialClinico;
//# sourceMappingURL=historial-clinico.js.map