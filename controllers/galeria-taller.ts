
import { Request, Response } from "express";
import GaleriaTaller from "../models/galeria-taller";



export const getGaleriasTalleres = async ( req : Request, res : Response)=> {
    const query = { estado : true };

    try {
        const [total, galeriaTalleres ] = await Promise.all([
            GaleriaTaller.findAndCountAll({ where: query }).then(result=>  result.count  )
            , GaleriaTaller.findAll({ where: query})
            // , Seccion.findAll({ where:{ estado: true } })
        ]) 
        res.json({
              total
            , galeriaTalleres
        })   
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });    
    }
}



export const getGaleriaTaller = async ( req : Request, res : Response )=>{
    const { id }= req.params;

try {
   const galeria_taller = await GaleriaTaller.findByPk( id );
   res.json( galeria_taller ); 
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}

export const postGaleriaTaller = async ( req : Request, res : Response )=>{
    const { body } = req;
try {
    const { estado, ... galeriaTallerBody } = body;
    const galeriaTaller = GaleriaTaller.build(galeriaTallerBody);
    await galeriaTaller.save();
    res.json(galeriaTaller);
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}

export const putGaleriaTaller = async ( req : Request, res : Response )=>{
 const { id } = req.params;
    const { body } = req;
try {
    const { img } = body;
    const data ={
        img:img.trim()
    }
    const galeriaTaller = await GaleriaTaller.findByPk( id );
    await galeriaTaller?.update(data);
    res.json(galeriaTaller);
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}


export const deleteGaleriaTaller = async ( req : Request, res : Response )=>{
  const { id } = req.params;
try {
    const galeriaTaller = await GaleriaTaller.findByPk( id );
    await galeriaTaller?.update({ estado: false });
    return res.json(galeriaTaller);
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}







