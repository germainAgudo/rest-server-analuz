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
exports.deleteTestimonio = exports.putTestimonio = exports.postTestimonio = exports.getTestimonio = exports.getTestimonios = void 0;
const testimonio_1 = __importDefault(require("../models/testimonio"));
const getTestimonios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { estado: true };
    try {
        const [total, testimonios] = yield Promise.all([
            testimonio_1.default.findAndCountAll({ where: query }).then(result => result.count),
            testimonio_1.default.findAll({ where: query })
            // , Seccion.findAll({ where:{ estado: true } })
        ]);
        res.json({
            total,
            testimonios
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.getTestimonios = getTestimonios;
const getTestimonio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const testimonio = yield testimonio_1.default.findByPk(id);
        res.json(testimonio);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.getTestimonio = getTestimonio;
const postTestimonio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { body } = req;
    try {
        const { estado } = body, testimonioBody = __rest(body, ["estado"]);
        testimonioBody.usuario_id = (_a = req.usuario) === null || _a === void 0 ? void 0 : _a.id;
        const testimonio = testimonio_1.default.build(testimonioBody);
        yield testimonio.save();
        res.json({
            testimonio
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postTestimonio = postTestimonio;
const putTestimonio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const { estado } = body, testimonioBody = __rest(body, ["estado"]);
        const testimonio = yield testimonio_1.default.findByPk(id);
        yield (testimonio === null || testimonio === void 0 ? void 0 : testimonio.update(testimonioBody));
        res.json(testimonio);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putTestimonio = putTestimonio;
const deleteTestimonio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b, _c, _d;
    const { id } = req.params;
    try {
        const testimonio = yield testimonio_1.default.findByPk(id);
        if (((_b = req.usuario) === null || _b === void 0 ? void 0 : _b.id) != (testimonio === null || testimonio === void 0 ? void 0 : testimonio.getDataValue('usuario_id')) || ((_c = req.usuario) === null || _c === void 0 ? void 0 : _c.rol) != 'ADMIN') {
            res.status(401).json({
                msg: `El id ${(_d = req.usuario) === null || _d === void 0 ? void 0 : _d.id} no cuenta con los permisos necesarios - no puede hacer esto`
            });
        }
        yield (testimonio === null || testimonio === void 0 ? void 0 : testimonio.update({ estado: false }));
        return res.json(testimonio);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.deleteTestimonio = deleteTestimonio;
const validarPermisoTestimonio = (req, id) => {
    var _a;
    if (((_a = req.usuario) === null || _a === void 0 ? void 0 : _a.id) == id) {
        return true;
    }
    return false;
};
//# sourceMappingURL=testimonios.js.map