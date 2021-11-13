
import { Request, Response } from "express";
import Tratamiento from "../models/tratamiento";



export const getTratamientos = async ( req : Request, res : Response)=> {
    const query = { estado : true };

    try {
        const [total, tratamientos ] = await Promise.all([
            Tratamiento.findAndCountAll({ where: query }).then(result=>  result.count  )
            , Tratamiento.findAll({ where: query})
            // , Seccion.findAll({ where:{ estado: true } })
        ]) 
        res.json({
              total
            , tratamientos
        })   
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });    
    }
}



export const getTratamiento = async ( req : Request, res : Response )=>{
    const { id }= req.params;

try {
    const tratamiento = await Tratamiento.findByPk( id );
    res.json(tratamiento);   
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}

export const postTratamiento = async ( req : Request, res : Response )=>{
    const { body } = req;
try {
    const {  estado,... tratamientoBody} = body;
    const tratamiento =  Tratamiento.build(tratamientoBody);
    await tratamiento.save();
    res.json({
        tratamiento
    })    
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}

export const putTratamiento = async ( req : Request, res : Response )=>{
 const { id } = req.params;
    const { body } = req;
try {
    const {  estado,... tratamientoBody} = body;
    const tratamiento = await Tratamiento.findByPk( id );
    await tratamiento?.update( tratamientoBody );
    res.json(tratamiento);    
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}


export const deleteTratamiento = async ( req : Request, res : Response )=>{
  const { id } = req.params;
try {
    const tratamiento = await  Tratamiento.findByPk( id );
    await tratamiento?.update( { estado : false} )
    return res.json( tratamiento );    
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}






