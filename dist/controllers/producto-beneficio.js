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
exports.deleteProductoBeneficio = exports.putProductoBeneficio = exports.postProductoBeneficio = exports.getProductoBeneficio = exports.getProductoBeneficios = void 0;
const productobeneficio_1 = __importDefault(require("../models/productobeneficio"));
const getProductoBeneficios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { estado: true };
    try {
        const [total, producto_beneficio] = yield Promise.all([
            productobeneficio_1.default.findAndCountAll({ where: query }).then(result => result.count),
            productobeneficio_1.default.findAll({ where: query })
        ]);
        res.json({
            total,
            producto_beneficio
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.getProductoBeneficios = getProductoBeneficios;
const getProductoBeneficio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const producto_beneficio = yield productobeneficio_1.default.findByPk(id);
        res.json(producto_beneficio);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.getProductoBeneficio = getProductoBeneficio;
const postProductoBeneficio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const { estado } = body, productoBeneficioBody = __rest(body, ["estado"]);
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
        const producto_beneficio = productobeneficio_1.default.build(productoBeneficioBody);
        yield producto_beneficio.save();
        res.json(producto_beneficio);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postProductoBeneficio = postProductoBeneficio;
const putProductoBeneficio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const { estado } = body, productoBeneficioBody = __rest(body, ["estado"]);
        const producto_beneficio = yield productobeneficio_1.default.findByPk(id);
        yield (producto_beneficio === null || producto_beneficio === void 0 ? void 0 : producto_beneficio.update(productoBeneficioBody));
        res.json(producto_beneficio);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putProductoBeneficio = putProductoBeneficio;
const deleteProductoBeneficio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const producto_beneficio = yield productobeneficio_1.default.findByPk(id);
        // if (req.usuario?.id != historial_clinico?.getDataValue('usuario_id') || req.usuario?.rol != 'ADMIN') {
        //     res.status(401).json({
        //         msg: `El id ${req.usuario?.id} no cuenta con los permisos necesarios - no puede hacer esto`
        //     })
        // }
        yield (producto_beneficio === null || producto_beneficio === void 0 ? void 0 : producto_beneficio.update({ estado: false }));
        return res.json(producto_beneficio);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.deleteProductoBeneficio = deleteProductoBeneficio;
//# sourceMappingURL=producto-beneficio.js.map