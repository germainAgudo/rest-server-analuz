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
exports.deleteUsuario = exports.putUsuario = exports.postUsuario = exports.getUsuario = exports.getUsuarios = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const usuario_1 = __importDefault(require("../models/usuario"));
const generar_jwt_1 = require("../helpers/generar-jwt");
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const usuarios  = await Usuario.findAll();
    const query = { estado: true };
    try {
        const [total, usuarios] = yield Promise.all([
            usuario_1.default.findAndCountAll({ where: query }).then(result => result.count),
            usuario_1.default.findAll({ where: query })
            // , Usuario.findAll({ where:{ estado: true } })
        ]);
        res.json({
            total,
            usuarios
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.getUsuarios = getUsuarios;
const getUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const usuario = yield usuario_1.default.findByPk(id);
    res.json(usuario);
    // if (usuario) {
    //     res.json(usuario);
    // } else {
    //     res.status(400).json({
    //         msg: `No existe un usuario con el id: ${ id }`
    //     });        
    // }
});
exports.getUsuario = getUsuario;
const postUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existeEmail = yield usuario_1.default.findOne({
            where: {
                correo: body.correo
            }
        });
        if (existeEmail) {
            return res.status(400).json({
                msg: 'Ya existe un usuario con el correo electronico ' + body.correo
            });
        }
        const { estado } = body, nuevoUsuario = __rest(body, ["estado"]);
        const usuario = usuario_1.default.build(nuevoUsuario);
        const salt = bcryptjs_1.default.genSaltSync();
        usuario.setDataValue('password', bcryptjs_1.default.hashSync(nuevoUsuario.password, salt));
        // const usuario = Usuario.build(body);
        // const salt = bcryptjs.genSaltSync();
        // usuario.setDataValue('password', bcryptjs.hashSync( body.password, salt ) )  ;
        yield usuario.save();
        const token = yield (0, generar_jwt_1.generarJWT)(usuario.getDataValue('id'));
        res.json({
            usuario,
            token,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postUsuario = postUsuario;
const putUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        // const usuario = await  Usuario.findByPk( id );
        //    if ( !usuario ) {
        //        return res.status(404).json({
        //            msg: 'No existe un usuario con el id: '+ id
        //        })
        //    }
        const { estado } = body, nuevoUsuario = __rest(body, ["estado"]);
        const usuario = yield usuario_1.default.findByPk(id);
        if (body.password) {
            // console.log('si hay');
            const salt = bcryptjs_1.default.genSaltSync();
            nuevoUsuario.password = bcryptjs_1.default.hashSync(nuevoUsuario.password, salt);
        }
        yield (usuario === null || usuario === void 0 ? void 0 : usuario.update(nuevoUsuario));
        res.json(usuario);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putUsuario = putUsuario;
const deleteUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const usuario = yield usuario_1.default.findByPk(id);
    if (!usuario) {
        return res.status(400).json({
            msg: `No existe un usuario con el id: ${id}`
        });
    }
    // await usuario.destroy();
    yield usuario.update({ estado: false });
    res.json(usuario);
});
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=usuarios.js.map