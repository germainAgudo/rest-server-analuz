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
exports.deleteActuaContra = exports.putActuaContra = exports.postActuaContra = exports.getActuaContra = exports.getActuaContras = void 0;
const actua_contra_1 = __importDefault(require("../models/actua-contra"));
const getActuaContras = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { estado: true };
    try {
        const [total, actua_contra] = yield Promise.all([
            actua_contra_1.default.findAndCountAll({ where: query }).then(result => result.count),
            actua_contra_1.default.findAll({ where: query })
            // , Seccion.findAll({ where:{ estado: true } })
        ]);
        res.json({
            total,
            actua_contra
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.getActuaContras = getActuaContras;
const getActuaContra = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const actua_contra = yield actua_contra_1.default.findByPk(id);
        res.json(actua_contra);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.getActuaContra = getActuaContra;
const postActuaContra = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const { estado } = body, actuaContraBody = __rest(body, ["estado"]);
        const actua_contra = actua_contra_1.default.build(actuaContraBody);
        yield actua_contra.save();
        res.json(actua_contra);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postActuaContra = postActuaContra;
const putActuaContra = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const { descripcion } = body;
        const existe = yield actua_contra_1.default.findOne({
            where: {
                descripcion: descripcion.trim(),
                estado: true,
            }
        });
        if (existe && existe.getDataValue('id') != id) {
            return res.status(400).json({
                msg: `Lo sentimos, el "Actua contra": "${descripcion}" ya se encuentra registrado`
            });
        }
        const { estado } = body, actuaContraBody = __rest(body, ["estado"]);
        const actua_contra = yield actua_contra_1.default.findByPk(id);
        yield (actua_contra === null || actua_contra === void 0 ? void 0 : actua_contra.update(actuaContraBody));
        res.json(actua_contra);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putActuaContra = putActuaContra;
const deleteActuaContra = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const actua_contra = yield actua_contra_1.default.findByPk(id);
        yield (actua_contra === null || actua_contra === void 0 ? void 0 : actua_contra.update({ estado: false }));
        return res.json(actua_contra);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.deleteActuaContra = deleteActuaContra;
//# sourceMappingURL=actua-contra.js.map