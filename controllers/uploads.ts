// import multer  from "multer";
import { Request, Response } from "express";
import MetodoPago from "../models/metodoPago";
import path from "path";
import fs  from "fs"
import Usuario from "../models/usuario";
import { uploads_metodoPago } from "../helpers/validar-uploads";
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



export const actualizarImagen  = async(req : Request, res : Response)=>{
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
        modelo = await Usuario.findByPk(id);
        if (!modelo) {
            return res.status(400).json({
                msg: `No existe un usuario con el id ${ id }`
            })
        }
    
      
        break;
    case 'metodos-pagos':
        
        modelo = await  MetodoPago.findByPk(id);
        if (!modelo) {
            return res.status(400).json({
                msg: `No existe un Metodo de pago con el id ${ id }`
            })
        }

        break;

    default:
        return res.status(400).json({
            msg: `Colección en desarrollo`
        })
        break;
}








///Limpiar imagenes previas
if (modelo?.getDataValue('imgurl') != null) {
    // const pathImagen = path.join(__dirname)
      // Hay que borrar la imagen del servidor 
// const pathImagen = path.join(__dirname, '../uploads/metodos-pagos', coleccion, modelo?.getDataValue('imgurl'));

 const pathImagen = path.resolve(modelo?.getDataValue('imgurl'))
 console.log(pathImagen);
 
if (fs.existsSync( pathImagen)) {
   await fs.unlinkSync( pathImagen);
  }


} 
else if(modelo?.getDataValue('img') ){
    const pathImagen = path.join(__dirname, '../uploads/metodos-pagos', coleccion, modelo?.getDataValue('img'));
    if (fs.existsSync( pathImagen)) {
      fs.unlinkSync( pathImagen);
    }



}

modelo.setDataValue('imgurl', req.file?.path );
modelo.save()


res.json({
    modelo
});










    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });  
    }

}