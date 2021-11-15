"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploads_actuaContra = exports.uploads_beneficio = exports.uploads_metodoAnaluz = exports.uploads_usuario = exports.uploads_metodoPago = void 0;
const multer_1 = __importDefault(require("multer"));
const uuid_1 = require("uuid");
const path_1 = __importDefault(require("path"));
const storageMetodoPago = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/metodos-pagos');
    },
    filename: (req, file, cb) => {
        if (file != null) {
            // console.log(file);
            cb(null, (0, uuid_1.v4)() + path_1.default.extname(file.originalname));
        }
    }
});
const uploadMetodoPago = (0, multer_1.default)({ storage: storageMetodoPago });
exports.uploads_metodoPago = uploadMetodoPago.single('imagen');
// const uploadMetodoPago = multer({
//     storage: storageMetodoPago,
//     // fileFilter:   
//     // (req, file, cb) => {
//     //     if (file.mimetype == "image/png" 
//     //     || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg"
//     //     )
//     //      {
//     //       cb(null, true);
//     //     } else {
//     //       cb(null, false);
//     //       return cb(
//     //           new Error('Only .png, .jpg and .jpeg format allowed!')
//     //           );
//     //     }
//     //   }
// });
// export const uploads_metodoPago = uploadMetodoPago.single('imagen');
/**
 *
 */
const storageUsuario = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/usuarios');
    }, filename: (req, file, cb) => {
        if (file != null) {
            cb(null, (0, uuid_1.v4)() + path_1.default.extname(file.originalname));
        }
    }
});
const uploadUsuario = (0, multer_1.default)({ storage: storageMetodoPago });
exports.uploads_usuario = uploadUsuario.single('imagen');
/**
 *
 */
const storageMetodoAnaluz = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/metodo-analuz');
    }, filename: (req, file, cb) => {
        if (file != null) {
            cb(null, (0, uuid_1.v4)() + path_1.default.extname(file.originalname));
        }
    }
});
const uploadMetodoAnaluz = (0, multer_1.default)({ storage: storageMetodoAnaluz });
exports.uploads_metodoAnaluz = uploadMetodoAnaluz.single('imagen');
/**
 *
 */
const storagebeneficio = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/beneficios');
    }, filename: (req, file, cb) => {
        if (file != null) {
            cb(null, (0, uuid_1.v4)() + path_1.default.extname(file.originalname));
        }
    }
});
const uploadbeneficio = (0, multer_1.default)({ storage: storagebeneficio });
exports.uploads_beneficio = uploadbeneficio.single('imagen');
/**
 *
 */
const storageActuaContra = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/actua-contra');
    }, filename: (req, file, cb) => {
        if (file != null) {
            cb(null, (0, uuid_1.v4)() + path_1.default.extname(file.originalname));
        }
    }
});
const uploadActuaContra = (0, multer_1.default)({ storage: storageActuaContra });
exports.uploads_actuaContra = uploadActuaContra.single('imagen');
/**
 *
 */ 
//# sourceMappingURL=validar-uploads.js.map