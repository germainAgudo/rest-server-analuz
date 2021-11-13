"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.subirArchivo = void 0;
const path_1 = __importDefault(require("path"));
// const  { v4 : uuidv4     } = require ("uuid");
const uuid_1 = require("uuid");
const subirArchivo = (files, extensionesValidas = ['png', 'jpg', 'jpeg', 'gif'], carpeta = '') => {
    return new Promise((resolve, reject) => {
        //Se extrae el nombre del archivo
        const { originalname } = files;
        const nombreCortado = originalname.split('.');
        const extension = nombreCortado[nombreCortado.length - 1];
        // Validar la extension
        if (!extensionesValidas.includes(extension)) {
            return reject(`La extensión ${extension} no es permitida - ${extensionesValidas}`);
        }
        const nombreTemp = (0, uuid_1.v4)() + '.' + extension;
        const uploadPath = path_1.default.join(__dirname, '../uploads/', carpeta, nombreTemp);
        originalname.mv(uploadPath, (err) => {
            if (err) {
                reject(err);
            }
            resolve(nombreTemp);
        });
    });
};
exports.subirArchivo = subirArchivo;
//# sourceMappingURL=subir-archivos.js.map