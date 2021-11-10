
import { Request, Response } from "express";
import GaleriaClase from "../models/galeria-clase";



export const getGaleriasClases = async ( req : Request, res : Response)=> {
    const query = { estado : true };

    try {
        const [total, galeria_clases ] = await Promise.all([
            GaleriaClase.findAndCountAll({ where: query }).then(result=>  result.count  )
            , GaleriaClase.findAll({ where: query})
            // , Seccion.findAll({ where:{ estado: true } })
        ]) 
        res.json({
              total
            , galeria_clases
        })   
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });    
    }
}



export const getGaleriaClase = async ( req : Request, res : Response )=>{
    const { id }= req.params;

try {
   const galeria_clase = await GaleriaClase.findByPk( id );
   res.json( galeria_clase ); 
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}

export const postGaleriaClase = async ( req : Request, res : Response )=>{
    const { body } = req;
try {
    const { estado, ... galeriaClaseBody } = body;
    const galeria_clase = GaleriaClase.build(galeriaClaseBody);
    await galeria_clase.save();
    res.json(galeria_clase);
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}

export const putGaleriaClase = async ( req : Request, res : Response )=>{
 const { id } = req.params;
    const { body } = req;
try {
    const { img } = body;
    const data ={
        img:img.trim()
    }
    const galeria_clase = await GaleriaClase.findByPk( id );
    await galeria_clase?.update(data);
    res.json(galeria_clase);
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}


export const deleteGaleriaClase = async ( req : Request, res : Response )=>{
  const { id } = req.params;
try {
    const galeria_clase = await GaleriaClase.findByPk( id );
    await galeria_clase?.update({ estado: false });
    return res.json(galeria_clase);
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}







