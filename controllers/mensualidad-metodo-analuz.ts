
import { Request, Response } from "express";
import MensualidadMetodoAnaluz from "../models/mensualidad-metodoanaluz";



export const getMensualidadesMetodos = async ( req : Request, res : Response)=> {
    const query = { estado : true };

    try {
        const [total, mensualidades ] = await Promise.all([
            MensualidadMetodoAnaluz.findAndCountAll({ where: query }).then(result=>  result.count  )
            , MensualidadMetodoAnaluz.findAll({ where: query})
            // , Seccion.findAll({ where:{ estado: true } })
        ]) 
        res.json({
              total
            , mensualidades
        })   
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });    
    }
}



export const getMensualidadMetodo = async ( req : Request, res : Response )=>{
    const { id }= req.params;

try {
    const mensualidad_metodo = await MensualidadMetodoAnaluz.findByPk( id );
    res.json(mensualidad_metodo);
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}

export const postMensualidadMetodo = async ( req : Request, res : Response )=>{
    const { body } = req;
try {
    const { estado, ... mensualidadMetodoBody } = body;
    const mensualidad_metodo = MensualidadMetodoAnaluz.build( mensualidadMetodoBody);
    await mensualidad_metodo.save();
    res.json(mensualidad_metodo)
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}

export const putMensualidadMetodo = async ( req : Request, res : Response )=>{
 const { id } = req.params;
    const { body } = req;
try {
    const { estado, ... mensualidadMetodoBody } = body;
    const mensualidad_metodo = await MensualidadMetodoAnaluz.findByPk( id );
    await mensualidad_metodo?.update( mensualidadMetodoBody );
    res.json(mensualidad_metodo);
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}


export const deleteMensualidadMetodo = async ( req : Request, res : Response )=>{
  const { id } = req.params;
try {
    const mensualidad_metodo = await MensualidadMetodoAnaluz.findByPk( id );
    await mensualidad_metodo?.update({estado_mensualidad: true});
    return res.json(mensualidad_metodo);
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}







