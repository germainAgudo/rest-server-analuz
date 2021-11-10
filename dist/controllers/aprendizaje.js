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
exports.deleteAprendizaje = exports.putAprendizaje = exports.postAprendizaje = exports.getAprendizaje = exports.getAprendizajes = void 0;
const aprendizaje_1 = __importDefault(require("../models/aprendizaje"));
const usuario_1 = __importDefault(require("../models/usuario"));
const getAprendizajes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { estado: true };
    try {
        const [total, aprendizajes] = yield Promise.all([
            aprendizaje_1.default.findAndCountAll({ where: query }).then(result => result.count)
            // , Aprendizaje.findAll({ where: query})
            // , Aprendizaje.findAll({ 
            //     where: query,
            //    include :{
            //        model : Usuario, 
            //     //    as: 'usuario'
            //     // attributes:['nombre']
            //    },
            // //    include :[{
            // //     model : Usuario, 
            // //  //    as: 'usuario'
            // //  attributes:['nombre']
            // // }]
            // })
            ,
            aprendizaje_1.default.findAll({
                where: query,
                attributes: {
                    exclude: ['usuario_id']
                },
                include: [
                    {
                        model: usuario_1.default,
                        // attributes:[
                        // ]
                        // foreignKey:'usuario_id',
                        as: "usuario",
                        // attributes: ['nombre']
                        attributes: {
                            exclude: ['password']
                        },
                    }
                ]
            })
            // , Seccion.findAll({ where:{ estado: true } })
        ]);
        res.json({
            total,
            aprendizajes
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.getAprendizajes = getAprendizajes;
const getAprendizaje = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const aprendizaje = yield aprendizaje_1.default.findByPk(id);
        res.json(aprendizaje);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.getAprendizaje = getAprendizaje;
const postAprendizaje = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    const { body } = req;
    try {
        const { estado } = body, aprendizajeBody = __rest(body, ["estado"]);
        const { clase_id } = req.body;
        aprendizajeBody.usuario_id = (_a = req.usuario) === null || _a === void 0 ? void 0 : _a.id;
        const existe = yield aprendizaje_1.default.findOne({
            where: {
                clase_id: clase_id,
                usuario_id: (_b = req.usuario) === null || _b === void 0 ? void 0 : _b.id,
                estado: true
            }
        });
        if (existe) {
            return res.status(400).json({
                msg: `El usuario  ${(_c = req.usuario) === null || _c === void 0 ? void 0 : _c.id} ya se encuentra inscrito en la clase ${clase_id}`
            });
        }
        const aprendizaje = aprendizaje_1.default.build(aprendizajeBody);
        yield aprendizaje.save();
        res.json({
            aprendizaje
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postAprendizaje = postAprendizaje;
const putAprendizaje = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const { estado } = body, aprendizajeBody = __rest(body, ["estado"]);
        const aprendizaje = yield aprendizaje_1.default.findByPk(id);
        yield (aprendizaje === null || aprendizaje === void 0 ? void 0 : aprendizaje.update(aprendizajeBody));
        res.json(aprendizaje);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putAprendizaje = putAprendizaje;
const deleteAprendizaje = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _d, _e, _f;
    const { id } = req.params;
    try {
        const aprendizaje = yield aprendizaje_1.default.findByPk(id);
        if (((_d = req.usuario) === null || _d === void 0 ? void 0 : _d.id) != (aprendizaje === null || aprendizaje === void 0 ? void 0 : aprendizaje.getDataValue('usuario_id')) || ((_e = req.usuario) === null || _e === void 0 ? void 0 : _e.rol) != 'ADMIN') {
            res.status(401).json({
                msg: `El id ${(_f = req.usuario) === null || _f === void 0 ? void 0 : _f.id} no cuenta con los permisos necesarios - no puede hacer esto`
            });
        }
        yield (aprendizaje === null || aprendizaje === void 0 ? void 0 : aprendizaje.update({ estado: false }));
        return res.json(aprendizaje);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.deleteAprendizaje = deleteAprendizaje;
//# sourceMappingURL=aprendizaje.js.map