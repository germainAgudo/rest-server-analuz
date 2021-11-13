"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploads_metodoPago = void 0;
const multer_1 = __importDefault(require("multer"));
const uuid_1 = require("uuid");
const path_1 = __importDefault(require("path"));
const storageMetodoPago = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/metodos-pagos');
    },
    filename: (req, file, cb) => {
        //   console.log(file);
        if (file != null) {
            cb(null, (0, uuid_1.v4)() + path_1.default.extname(file.originalname));
        }
        // cb(null,  uuidv4()+path.extname(file.originalname) , )
    }
});
const uploadMetodoPago = (0, multer_1.default)({
    storage: storageMetodoPago,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png"
        // || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg"
        ) {
            cb(null, true);
        }
        else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});
exports.uploads_metodoPago = uploadMetodoPago.single('imagen');
//# sourceMappingURL=validar-uploads.js.map