
import { Request, Response } from "express";
import Clase from "../models/clase";



export const getClases = async ( req : Request, res : Response)=> {
    const query = { estado : true };

    try {
        const [total, clases ] = await Promise.all([
            Clase.findAndCountAll({ where: query }).then(result=>  result.count  )
            , Clase.findAll({ where: query})
            // , Seccion.findAll({ where:{ estado: true } })
        ]) 
        res.json({
              total
            , clases
        })   
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });    
    }
}



export const getClase = async ( req : Request, res : Response )=>{
    const { id }= req.params;

try {
    const clase = await Clase.findByPk( id );
    res.json(clase);   
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}

export const postClase = async ( req : Request, res : Response )=>{
    const { body } = req;
try {
    const {  estado,... claseBody} = body;
    const clase =  Clase.build(claseBody);
    await clase.save();
    res.json({
        clase
    })    
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}

export const putClase = async ( req : Request, res : Response )=>{
 const { id } = req.params;
    const { body } = req;
try {
    const {  estado,... claseBody} = body;
    const clase = await Clase.findByPk( id );
    await clase?.update( claseBody );
    res.json(clase);    
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}


export const deleteClase = async ( req : Request, res : Response )=>{
  const { id } = req.params;
try {
    const clase = await  Clase.findByPk( id );
    await clase?.update( { estado : false} )
    return res.json( clase );    
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}






