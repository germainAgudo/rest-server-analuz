"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploads_galeria_producto = exports.uploads_galeria_tratamiento = exports.uploads_galeria_clase = exports.uploads_galeria_taller = void 0;
const multer_1 = __importDefault(require("multer"));
const uuid_1 = require("uuid");
const path_1 = __importDefault(require("path"));
/**
 *
 */
const storage_galeria_taller = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/galeria-talleres');
    }, filename: (req, file, cb) => {
        if (file != null) {
            cb(null, (0, uuid_1.v4)() + path_1.default.extname(file.originalname));
        }
    }
});
const upload_galeria_taller = (0, multer_1.default)({ storage: storage_galeria_taller });
exports.uploads_galeria_taller = upload_galeria_taller.single('imagen');
/**
 *
 */
const storage_galeria_clase = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/galeria-clases');
    }, filename: (req, file, cb) => {
        if (file != null) {
            cb(null, (0, uuid_1.v4)() + path_1.default.extname(file.originalname));
        }
    }
});
const upload_galeria_clase = (0, multer_1.default)({ storage: storage_galeria_clase });
exports.uploads_galeria_clase = upload_galeria_clase.single('imagen');
/**
 *
 */
const storage_galeria_tratamiento = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/galeria-tratamientos');
    }, filename: (req, file, cb) => {
        if (file != null) {
            cb(null, (0, uuid_1.v4)() + path_1.default.extname(file.originalname));
        }
    }
});
const upload_galeria_tratamiento = (0, multer_1.default)({ storage: storage_galeria_tratamiento });
exports.uploads_galeria_tratamiento = upload_galeria_tratamiento.single('imagen');
/**
 *
 */
const storage_galeria_producto = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/galeria-productos');
    }, filename: (req, file, cb) => {
        if (file != null) {
            cb(null, (0, uuid_1.v4)() + path_1.default.extname(file.originalname));
        }
    }
});
const upload_galeria_producto = (0, multer_1.default)({ storage: storage_galeria_producto });
exports.uploads_galeria_producto = upload_galeria_producto.single('imagen');
// /**
//  * 
//  */
// const storage_galeria_ = multer.diskStorage( {
//     destination: (req, file , cb)=>{
//         cb(null, 'uploads/galeria-')
//     },  filename: (req, file ,cb)=>{
// if (file!=null) {
//     cb(null,  uuidv4()+path.extname(file.originalname) , )    
// } }});
// const upload_galeria_ = multer({storage: storage_galeria_});
// export const uploads_galeria_ = upload_galeria_.single('imagen');
//# sourceMappingURL=galeria-uploads.js.map