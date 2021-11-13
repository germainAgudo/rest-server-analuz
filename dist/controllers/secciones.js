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
exports.deleteSeccion = exports.putSeccion = exports.postSeccion = exports.getSeccion = exports.getSecciones = void 0;
const seccion_1 = __importDefault(require("../models/seccion"));
const getSecciones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { estado: true };
    // const secciones = await Seccion.findAll();
    // const secciones = await Seccion.findAndCountAll()
    try {
        const [total, secciones] = yield Promise.all([
            seccion_1.default.findAndCountAll({ where: query }).then(result => result.count),
            seccion_1.default.findAll({ where: query })
            // , Seccion.findAll({ where:{ estado: true } })
        ]);
        res.json({
            total,
            secciones
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.getSecciones = getSecciones;
const getSeccion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const seccion = yield seccion_1.default.findByPk(id);
        res.json(seccion);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.getSeccion = getSeccion;
const postSeccion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const { estado } = body, seccionBody = __rest(body, ["estado"]);
        const seccion = seccion_1.default.build(seccionBody);
        yield seccion.save();
        res.json(seccion);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postSeccion = postSeccion;
const putSeccion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const { estado } = body, seccionBody = __rest(body, ["estado"]);
        const seccion = yield seccion_1.default.findByPk(id);
        yield (seccion === null || seccion === void 0 ? void 0 : seccion.update(seccionBody));
        res.json(seccion);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putSeccion = putSeccion;
const deleteSeccion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const seccion = yield seccion_1.default.findByPk(id);
        // if ( !seccion || !seccion.getDataValue('estado') ) {
        //     return  res.status(400).json({
        //         msg: `No existe una sección con el id: ${ id }`
        //     });    
        // }
        yield (seccion === null || seccion === void 0 ? void 0 : seccion.update({ estado: false }));
        return res.json(seccion);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.deleteSeccion = deleteSeccion;
//# sourceMappingURL=secciones.js.map