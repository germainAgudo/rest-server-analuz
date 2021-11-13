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
exports.actualizarImagen = void 0;
const metodoPago_1 = __importDefault(require("../models/metodoPago"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const usuario_1 = __importDefault(require("../models/usuario"));
// const storage = multer.diskStorage(
//     {
//     destination: (req, file , cb)=>{
//         cb(null, 'uploads')
//     },
//     filename: (req, file ,cb)=>{
//         console.log(file);
//             cb(null,  `${Date.now()}-${file.originalname}` , )
//     }
// }
// );
// const upload = multer({storage: storage});
// export const uploads_archivo = upload.single('imagen');
// export const postUploadFile = async ( req : Request, res : Response )=>{
//     const { body } = req;
// try {
// console.log(req.body.name);
//     console.log(req?.file?.path);
// //   uploads_archivo
//     res.json({
//         msg: 'Todo bien'
//     });
// } catch (error) {
//     console.log(error);
//     res.status(500).json({
//         msg: 'Hable con el administrador'
//     });  
// }
// }
const actualizarImagen = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { id, coleccion } = req.params;
    const { body } = req;
    try {
        console.log(coleccion);
        // const { nombre } = body;
        // const data ={
        //     nombre: nombre.trim().toUpperCase(),
        // }
        // const metodoPago = await MetodoPago.findByPk( id );
        // await metodoPago?.update( data );
        // res.json(metodoPago);
        let modelo;
        switch (coleccion) {
            case 'usuarios':
                modelo = yield usuario_1.default.findByPk(id);
                if (!modelo) {
                    return res.status(400).json({
                        msg: `No existe un usuario con el id ${id}`
                    });
                }
                break;
            case 'metodos-pagos':
                modelo = yield metodoPago_1.default.findByPk(id);
                if (!modelo) {
                    return res.status(400).json({
                        msg: `No existe un Metodo de pago con el id ${id}`
                    });
                }
                break;
            default:
                return res.status(400).json({
                    msg: `Colección en desarrollo`
                });
                break;
        }
        ///Limpiar imagenes previas
        if ((modelo === null || modelo === void 0 ? void 0 : modelo.getDataValue('imgurl')) != null) {
            // const pathImagen = path.join(__dirname)
            // Hay que borrar la imagen del servidor 
            // const pathImagen = path.join(__dirname, '../uploads/metodos-pagos', coleccion, modelo?.getDataValue('imgurl'));
            const pathImagen = path_1.default.resolve(modelo === null || modelo === void 0 ? void 0 : modelo.getDataValue('imgurl'));
            console.log(pathImagen);
            if (fs_1.default.existsSync(pathImagen)) {
                yield fs_1.default.unlinkSync(pathImagen);
            }
        }
        else if (modelo === null || modelo === void 0 ? void 0 : modelo.getDataValue('img')) {
            const pathImagen = path_1.default.join(__dirname, '../uploads/metodos-pagos', coleccion, modelo === null || modelo === void 0 ? void 0 : modelo.getDataValue('img'));
            if (fs_1.default.existsSync(pathImagen)) {
                fs_1.default.unlinkSync(pathImagen);
            }
        }
        modelo.setDataValue('imgurl', (_a = req.file) === null || _a === void 0 ? void 0 : _a.path);
        modelo.save();
        res.json({
            modelo
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.actualizarImagen = actualizarImagen;
//# sourceMappingURL=uploads.js.map