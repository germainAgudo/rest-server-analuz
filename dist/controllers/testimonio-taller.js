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
exports.deleteTestimonioTaller = exports.putTestimonioTaller = exports.postTestimonioTaller = exports.getTestimonioTaller = exports.getTestimoniosTalleres = void 0;
const testimonio_taller_1 = __importDefault(require("../models/testimonio-taller"));
const getTestimoniosTalleres = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { estado: true };
    try {
        const [total, testimonios_talleres] = yield Promise.all([
            testimonio_taller_1.default.findAndCountAll({ where: query }).then(result => result.count),
            testimonio_taller_1.default.findAll({ where: query })
        ]);
        res.json({
            total,
            testimonios_talleres
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.getTestimoniosTalleres = getTestimoniosTalleres;
const getTestimonioTaller = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const testimonio_taller = yield testimonio_taller_1.default.findByPk(id);
        res.json(testimonio_taller);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.getTestimonioTaller = getTestimonioTaller;
const postTestimonioTaller = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const { estado } = body, testimonioTallerBody = __rest(body, ["estado"]);
        const testimonio_taller = testimonio_taller_1.default.build(testimonioTallerBody);
        yield testimonio_taller.save();
        res.json(testimonio_taller);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postTestimonioTaller = postTestimonioTaller;
const putTestimonioTaller = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    const { id } = req.params;
    const { body } = req;
    try {
        const { testimonio } = body;
        const testimonioTallerBody = {
            testimonio: testimonio.trim()
        };
        const testimonio_taller = yield testimonio_taller_1.default.findByPk(id);
        if (((_a = req.usuario) === null || _a === void 0 ? void 0 : _a.id) != (testimonio_taller === null || testimonio_taller === void 0 ? void 0 : testimonio_taller.getDataValue('usuario_id')) || ((_b = req.usuario) === null || _b === void 0 ? void 0 : _b.rol) != 'ADMIN') {
            res.status(401).json({
                msg: `El id ${(_c = req.usuario) === null || _c === void 0 ? void 0 : _c.id} no cuenta con los permisos necesarios - no puede hacer esto`
            });
        }
        yield (testimonio_taller === null || testimonio_taller === void 0 ? void 0 : testimonio_taller.update(testimonioTallerBody));
        res.json(testimonio_taller);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putTestimonioTaller = putTestimonioTaller;
const deleteTestimonioTaller = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _d, _e, _f;
    const { id } = req.params;
    try {
        const testimonio_taller = yield testimonio_taller_1.default.findByPk(id);
        // if ( !seccion || !seccion.getDataValue('estado') ) {
        //     return  res.status(400).json({
        //         msg: `No existe una sección con el id: ${ id }`
        //     });    
        // }
        if (((_d = req.usuario) === null || _d === void 0 ? void 0 : _d.id) != (testimonio_taller === null || testimonio_taller === void 0 ? void 0 : testimonio_taller.getDataValue('usuario_id')) || ((_e = req.usuario) === null || _e === void 0 ? void 0 : _e.rol) != 'ADMIN') {
            res.status(401).json({
                msg: `El id ${(_f = req.usuario) === null || _f === void 0 ? void 0 : _f.id} no cuenta con los permisos necesarios - no puede hacer esto`
            });
        }
        yield (testimonio_taller === null || testimonio_taller === void 0 ? void 0 : testimonio_taller.update({ estado: false }));
        return res.json(testimonio_taller);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.deleteTestimonioTaller = deleteTestimonioTaller;
//# sourceMappingURL=testimonio-taller.js.map