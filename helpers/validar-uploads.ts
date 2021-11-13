import multer  from "multer";
import { v4 as uuidv4 } from 'uuid';
import path from "path";

import {  Response } from "express";

const storageMetodoPago = multer.diskStorage(
    
    {
    destination: (req, file , cb)=>{
        cb(null, 'uploads/metodos-pagos')
    },
    filename: (req, file ,cb)=>{
    //   console.log(file);
      
if (file!=null) {
    
    cb(null,  uuidv4()+path.extname(file.originalname) , )
    
}
    // cb(null,  uuidv4()+path.extname(file.originalname) , )


        
    }
}


);

const uploadMetodoPago = multer({
    storage: storageMetodoPago,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" 
        // || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg"
        )
         {
          cb(null, true);
        } else {
          cb(null, false);
          
          return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
      }
});
export const uploads_metodoPago = uploadMetodoPago.single('imagen');
