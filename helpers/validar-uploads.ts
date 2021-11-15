import multer  from "multer";
import { v4 as uuidv4 } from 'uuid';
import path from "path";



const storageMetodoPago = multer.diskStorage(
    
    {
    destination: (req, file , cb)=>{
        cb(null, 'uploads/metodos-pagos')
    },
    filename: (req, file ,cb)=>{
      
if (file!=null) {
    // console.log(file);
    
    cb(null,  uuidv4()+path.extname(file.originalname) , )
    
}


        
    }
}


);

const uploadMetodoPago = multer({storage: storageMetodoPago});
export const uploads_metodoPago = uploadMetodoPago.single('imagen');



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
const storageUsuario = multer.diskStorage( {
    destination: (req, file , cb)=>{
        cb(null, 'uploads/usuarios')
    },  filename: (req, file ,cb)=>{
      
if (file!=null) {
    cb(null,  uuidv4()+path.extname(file.originalname) , )    
} }});
const uploadUsuario = multer({storage: storageMetodoPago});
export const uploads_usuario = uploadUsuario.single('imagen');
/**
 * 
 */
const storageMetodoAnaluz = multer.diskStorage( {
    destination: (req, file , cb)=>{
        cb(null, 'uploads/metodo-analuz')
    },  filename: (req, file ,cb)=>{
      
if (file!=null) {
    cb(null,  uuidv4()+path.extname(file.originalname) , )    
} }});
const uploadMetodoAnaluz = multer({storage: storageMetodoAnaluz});
export const uploads_metodoAnaluz = uploadMetodoAnaluz.single('imagen');
/**
 * 
 */
const storagebeneficio = multer.diskStorage( {
    destination: (req, file , cb)=>{
        cb(null, 'uploads/beneficios')
    },  filename: (req, file ,cb)=>{
      
if (file!=null) {
    cb(null,  uuidv4()+path.extname(file.originalname) , )    
} }});
const uploadbeneficio = multer({storage: storagebeneficio});
export const uploads_beneficio = uploadbeneficio.single('imagen');
/**
 * 
 */
const storageActuaContra = multer.diskStorage( {
    destination: (req, file , cb)=>{
        cb(null, 'uploads/actua-contra')
    },  filename: (req, file ,cb)=>{
      
if (file!=null) {
    cb(null,  uuidv4()+path.extname(file.originalname) , )    
} }});
const uploadActuaContra = multer({storage: storageActuaContra});
export const uploads_actuaContra = uploadActuaContra.single('imagen');
/**
 * 
 */