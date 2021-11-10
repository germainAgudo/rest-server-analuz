
import { Request, Response } from "express";
import GaleriaTratamiento from "../models/galeria-tratamiento";



export const getGaleriasTratamiento = async ( req : Request, res : Response)=> {
    const query = { estado : true };

    try {
        const [total, galeriasTratamientos ] = await Promise.all([
            GaleriaTratamiento.findAndCountAll({ where: query }).then(result=>  result.count  )
            , GaleriaTratamiento.findAll({ where: query})
            // , Seccion.findAll({ where:{ estado: true } })
        ]) 
        res.json({
              total
            , galeriasTratamientos
        })   
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });    
    }
}



export const getGaleriaTratamiento = async ( req : Request, res : Response )=>{
    const { id }= req.params;

try {
   const galeria_tratamiento = await GaleriaTratamiento.findByPk( id );
   res.json( galeria_tratamiento ); 
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}

export const postGaleriaTratamiento = async ( req : Request, res : Response )=>{
    const { body } = req;
try {
    const { estado, ... galeriaTratamientoBody } = body;
    const galeriaTratamiento = GaleriaTratamiento.build(galeriaTratamientoBody);
    await galeriaTratamiento.save();
    res.json(galeriaTratamiento);
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}

export const putGaleriaTratamiento = async ( req : Request, res : Response )=>{
 const { id } = req.params;
    const { body } = req;
try {
    const { img } = body;
    const data ={
        img:img.trim()
    }
    const galeriaTratamiento = await GaleriaTratamiento.findByPk( id );
    await galeriaTratamiento?.update(data);
    res.json(galeriaTratamiento);
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}


export const deleteGaleriaTratamiento = async ( req : Request, res : Response )=>{
  const { id } = req.params;
try {
    const galeriaTratamiento = await GaleriaTratamiento.findByPk( id );
    await galeriaTratamiento?.update({ estado: false });
    return res.json(galeriaTratamiento);
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}







