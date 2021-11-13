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
exports.deleteBeneficio = exports.putBeneficio = exports.postBeneficio = exports.getBeneficio = exports.getBeneficios = void 0;
const beneficio_1 = __importDefault(require("../models/beneficio"));
const getBeneficios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { estado: true };
    try {
        const [total, beneficios] = yield Promise.all([
            beneficio_1.default.findAndCountAll({ where: query }).then(result => result.count),
            beneficio_1.default.findAll({ where: query })
            // , Seccion.findAll({ where:{ estado: true } })
        ]);
        res.json({
            total,
            beneficios
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.getBeneficios = getBeneficios;
const getBeneficio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const beneficio = yield beneficio_1.default.findByPk(id);
        res.json(beneficio);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.getBeneficio = getBeneficio;
const postBeneficio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const { estado } = body, beneficioBody = __rest(body, ["estado"]);
        const beneficio = beneficio_1.default.build(beneficioBody);
        yield beneficio.save();
        res.json(beneficio);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postBeneficio = postBeneficio;
const putBeneficio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const { descripcion } = body;
        const existe = yield beneficio_1.default.findOne({
            where: {
                descripcion: descripcion.trim(),
                estado: true,
            }
        });
        if (existe && existe.getDataValue('id') != id) {
            return res.status(400).json({
                msg: `Lo sentimos, el beneficio: "${descripcion}" ya se encuentra registrado`
            });
        }
        const { estado } = body, beneficioBody = __rest(body, ["estado"]);
        const beneficio = yield beneficio_1.default.findByPk(id);
        yield (beneficio === null || beneficio === void 0 ? void 0 : beneficio.update(beneficioBody));
        res.json(beneficio);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putBeneficio = putBeneficio;
const deleteBeneficio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const beneficio = yield beneficio_1.default.findByPk(id);
        yield (beneficio === null || beneficio === void 0 ? void 0 : beneficio.update({ estado: false }));
        return res.json(beneficio);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.deleteBeneficio = deleteBeneficio;
//# sourceMappingURL=beneficio.js.map