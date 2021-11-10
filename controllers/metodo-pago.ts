
import { Request, Response } from "express";
import MetodoPago from "../models/metodoPago";



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
    const data = {
        nombre: nombre.trim().ToUpperCase(),
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
        nombre: nombre.trim().ToUpperCase(),
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







