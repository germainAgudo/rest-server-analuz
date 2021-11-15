import path from "path";
import fs  from "fs"




import { Request, Response } from "express";
import MetodoAnaluz from "../models/metodo-analuz";



export const getMetodosAnaluz = async ( req : Request, res : Response)=> {
    const query = { estado : true };

    try {
        const [total, metodos_analuz ] = await Promise.all([
            MetodoAnaluz.findAndCountAll({ where: query }).then(result=>  result.count  )
            , MetodoAnaluz.findAll({ where: query})
            // , Seccion.findAll({ where:{ estado: true } })
        ]) 
        res.json({
              total
            , metodos_analuz
        })   
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });    
    }
}



export const getMetodoAnaluz = async ( req : Request, res : Response )=>{
    const { id }= req.params;

try {
    const metodo_analuz = await MetodoAnaluz.findByPk( id );
    res.json(metodo_analuz);
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}

export const postMetodoAnaluz = async ( req : Request, res : Response )=>{
    const { body } = req;
try {
    const { estado,... metodoAnaluzBody } = body;
    const metodoAnaluz = MetodoAnaluz.build(metodoAnaluzBody);
    await metodoAnaluz.save();
    res.json(metodoAnaluz);
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}

export const putMetodoAnaluz = async ( req : Request, res : Response )=>{
 const { id } = req.params;
    const { body } = req;
try {
    const {estado, ... metodoAnaluzBody} = body;
    const metodoAnaluz = await MetodoAnaluz.findByPk( id );
    await metodoAnaluz?.update( metodoAnaluzBody );
    res.json(metodoAnaluz);
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}


export const deleteMetodoAnaluz = async ( req : Request, res : Response )=>{
  const { id } = req.params;
try {
    const metodoAnaluz = await MetodoAnaluz.findByPk( id );
    await metodoAnaluz?.update({ estado : false });
    return res.json(metodoAnaluz);
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}



export const putUploadImagen = async ( req : Request, res : Response )=>{
    const { id } = req.params;
     
   try {


    
if (!req.file) {
    return res.status(400).json({
        msg: `La imagen es obligatoria`
    })
}


const metodo_analuz  = await MetodoAnaluz.findByPk(id);
if (metodo_analuz?.getDataValue('imgurl') != null) {
    const pathImagen = path.resolve(metodo_analuz?.getDataValue('imgurl'))
  
    
   if (fs.existsSync( pathImagen)) {
    fs.unlinkSync( pathImagen);
     }  
}


metodo_analuz?.setDataValue('imgurl', req.file?.path );
metodo_analuz?.save()


res.json({
    metodo_analuz
});


   } catch (error) {
       console.log(error);
       res.status(500).json({
           msg: 'Hable con el administrador'
       });  
   }
   }













   export const getUploadImagen= async ( req : Request, res : Response )=>{
    const { id } = req.params;
     
   try {

const metodo_analuz  = await MetodoAnaluz.findByPk(id);
if (metodo_analuz?.getDataValue('imgurl') != null) {
    
    const pathImagen = path.resolve(metodo_analuz?.getDataValue('imgurl'))
    
   if (fs.existsSync( pathImagen)) {
    //   await fs.unlinkSync( pathImagen);
    return res.sendFile(pathImagen);
     }  
}


const pathImagen = path.resolve(__dirname, '../../assets/no-imagen.png');
res.sendFile(pathImagen)




   } catch (error) {
       console.log(error);
       res.status(500).json({
           msg: 'Hable con el administrador'
       });  
   }
   }










