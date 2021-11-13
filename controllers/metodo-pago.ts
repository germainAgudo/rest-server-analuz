
import { Request, Response } from "express";
import MetodoPago from "../models/metodoPago";

import path from "path";
import fs  from "fs"

export const getMetodosPagos = async ( req : Request, res : Response)=> {
    const query = { estado : true };

    try {
        const [total, metodos_pagos ] = await Promise.all([
              MetodoPago.findAndCountAll({ where: query }).then(result=>  result.count  )
            , MetodoPago.findAll({ where: query})
            // , Seccion.findAll({ where:{ estado: true } })
        ]) 
        res.json({
              total
            , metodos_pagos
        })   
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });    
    }
}



export const getMetodoPago = async ( req : Request, res : Response )=>{
    const { id }= req.params;

try {
    const metodo_pago= await MetodoPago.findByPk( id );
    res.json(metodo_pago);
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}

export const postMetodoPago = async ( req : Request, res : Response )=>{
    const { body } = req;
try {
    const {nombre } = body;
    console.log(body);
    
    const data = {
        nombre: nombre.trim().toUpperCase(),
    }
    const metodo_pago = MetodoPago.build(data);
    await metodo_pago.save();
    res.json(metodo_pago);
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}

export const putMetodoPago = async ( req : Request, res : Response )=>{
 const { id } = req.params;
    const { body } = req;
try {
    const { nombre } = body;
    const data ={
        nombre: nombre.trim().toUpperCase(),
    }
    const metodoPago = await MetodoPago.findByPk( id );
    await metodoPago?.update( data );
    res.json(metodoPago);
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}


export const deleteMetodoPago = async ( req : Request, res : Response )=>{
  const { id } = req.params;
try {
    const metodoPago = await MetodoPago.findByPk( id );
    await metodoPago?.update({estado: false});
    return res.json( metodoPago );
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}



export const putUploadMetodoPago = async ( req : Request, res : Response )=>{
    const { id } = req.params;
     
   try {
if (!req.file) {
    return res.status(400).json({
        msg: `La imagen es obligatoria`
    })
}
const metodo_pago  = await MetodoPago.findByPk(id);
if (metodo_pago?.getDataValue('imgurl') != null) {
    const pathImagen = path.resolve(metodo_pago?.getDataValue('imgurl'))
    console.log(pathImagen);
    
   if (fs.existsSync( pathImagen)) {
      await fs.unlinkSync( pathImagen);
     }  
}

metodo_pago?.setDataValue('imgurl', req.file?.path );
metodo_pago?.save()


res.json({
    metodo_pago
});


   } catch (error) {
       console.log(error);
       res.status(500).json({
           msg: 'Hable con el administrador'
       });  
   }
   }



