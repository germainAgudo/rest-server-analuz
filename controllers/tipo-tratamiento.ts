
import { Request, Response } from "express";
import TipoTratamiento from "../models/tipoTratamiento";



export const getTiposTratamientos = async ( req : Request, res : Response)=> {
    const query = { estado : true };

    try {
        const [total, tipos_tratamientos ] = await Promise.all([
              TipoTratamiento.findAndCountAll({ where: query }).then(result=>  result.count  )
            , TipoTratamiento.findAll({ where: query})
            // , Seccion.findAll({ where:{ estado: true } })
        ]) 
        res.json({
              total
            , tipos_tratamientos
        })   
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });    
    }
}



export const getTipoTratamiento = async ( req : Request, res : Response )=>{
    const { id }= req.params;

try {
    const tipo_tratamiento= await TipoTratamiento.findByPk( id );
    res.json(tipo_tratamiento);
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}

export const postTipoTratamiento = async ( req : Request, res : Response )=>{
    const { body } = req;
try {
    const {nombre } = body;
    const data = {
        nombre: nombre.trim().toUpperCase(),
    }
    const tipo_tratamiento = TipoTratamiento.build(data);
    await tipo_tratamiento.save();
    res.json(tipo_tratamiento);
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}

export const putTipoTratamiento = async ( req : Request, res : Response )=>{
 const { id } = req.params;
    const { body } = req;
try {
    const { nombre } = body;
    const data ={
        nombre: nombre.trim().toUpperCase(),
    }
    const tipo_tratamiento = await TipoTratamiento.findByPk( id );
    await tipo_tratamiento?.update( data );
    res.json(tipo_tratamiento);
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}


export const deleteTipoTratamiento = async ( req : Request, res : Response )=>{
  const { id } = req.params;
try {
    const metodoPago = await TipoTratamiento.findByPk( id );
    await metodoPago?.update({estado: false});
    return res.json( metodoPago );
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}







