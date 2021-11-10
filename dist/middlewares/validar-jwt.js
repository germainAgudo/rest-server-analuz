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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const usuario_1 = __importDefault(require("../models/usuario"));
const validarJWT = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.header('analuz-token');
    if (!token) {
        return res.status(401).json({
            msg: 'No hay token de acceso para la solicitud'
        });
    }
    try {
        const secretKey = process.env.SECRETPRIVATEKEY || '53cr3tK3Y@n4LuzRu1zZ';
        const decodedToken = jsonwebtoken_1.default.verify(token, secretKey);
        const id = decodedToken.id;
        // console.log(id);
        // Leer el usuario que corresponde al id
        const usuario = yield usuario_1.default.findByPk(id);
        if (!usuario) {
            return res.status(401).json({
                msg: 'Token no válido - usuario no existe en la DB'
            });
        }
        // Veificar si el id tiene el estao true
        if (!usuario.getDataValue('estado')) {
            return res.status(401).json({
                msg: 'Token no válido - usuario con estado false'
            });
        }
        // console.log(id);
        req.usuario = usuario;
        // console.log(req.usuario);
        next();
    }
    catch (error) {
        console.log(error);
        res.status(401).json({
            msg: 'Token no válido'
        });
    }
});
exports.validarJWT = validarJWT;
//# sourceMappingURL=validar-jwt.js.map