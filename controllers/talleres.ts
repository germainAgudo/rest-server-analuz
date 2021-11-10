
import { Request, Response } from "express";
import Taller from "../models/taller";



export const getTalleres = async ( req : Request, res : Response)=> {
    const query = { estado : true };

    try {
        const [total, talleres ] = await Promise.all([
              Taller.findAndCountAll({ where: query }).then(result=>  result.count  )
            , Taller.findAll({ where: query})
        ]) 
        res.json({
              total
            , talleres
        })   
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });    
    }
}



export const getTaller = async ( req : Request, res : Response )=>{
    const { id }= req.params;

try {
    const taller = await Taller.findByPk( id );
    res.json(taller);   
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}

export const postTaller = async ( req : Request, res : Response )=>{
    const { body } = req;
try {
    const {  estado,... tallerBody} = body;
    const taller =  Taller.build(tallerBody);
    await taller.save();
    res.json(taller)    
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}

export const putTaller = async ( req : Request, res : Response )=>{
 const { id } = req.params;
    const { body } = req;
try {
    const {  estado,... tallerBody} = body;
    const taller = await Taller.findByPk( id );
    await taller?.update( tallerBody );
    res.json(taller);    
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}


export const deleteTaller = async ( req : Request, res : Response )=>{
  const { id } = req.params;
try {
    const taller = await  Taller.findByPk( id );
    await taller?.update( { estado : false} )
    return res.json( taller );    
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}






