import multer  from "multer";
import { v4 as uuidv4 } from 'uuid';
import path from "path";







/**
 * 
 */
 const storage_galeria_taller = multer.diskStorage( {
    destination: (req, file , cb)=>{
        cb(null, 'uploads/galeria-talleres')
    },  filename: (req, file ,cb)=>{
      
if (file!=null) {
    cb(null,  uuidv4()+path.extname(file.originalname) , )    
} }});
const upload_galeria_taller = multer({storage: storage_galeria_taller});
export const uploads_galeria_taller = upload_galeria_taller.single('imagen');

/**
 * 
 */
const storage_galeria_clase = multer.diskStorage( {
    destination: (req, file , cb)=>{
        cb(null, 'uploads/galeria-clases')
    },  filename: (req, file ,cb)=>{
      
if (file!=null) {
    cb(null,  uuidv4()+path.extname(file.originalname) , )    
} }});
const upload_galeria_clase = multer({storage: storage_galeria_clase});
export const uploads_galeria_clase = upload_galeria_clase.single('imagen');

/**
 * 
 */
const storage_galeria_tratamiento = multer.diskStorage( {
    destination: (req, file , cb)=>{
        cb(null, 'uploads/galeria-tratamientos')
    },  filename: (req, file ,cb)=>{
      
if (file!=null) {
    cb(null,  uuidv4()+path.extname(file.originalname) , )    
} }});
const upload_galeria_tratamiento = multer({storage: storage_galeria_tratamiento});
export const uploads_galeria_tratamiento = upload_galeria_tratamiento.single('imagen');

/**
 * 
 */
const storage_galeria_producto = multer.diskStorage( {
    destination: (req, file , cb)=>{
        cb(null, 'uploads/galeria-productos')
    },  filename: (req, file ,cb)=>{
      
if (file!=null) {
    cb(null,  uuidv4()+path.extname(file.originalname) , )    
} }});
const upload_galeria_producto = multer({storage: storage_galeria_producto});
export const uploads_galeria_producto = upload_galeria_producto.single('imagen');








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


