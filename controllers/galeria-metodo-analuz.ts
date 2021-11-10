
import { Request, Response } from "express";
import GaleriaMetodoAnaluz from "../models/galeria-metodo-analuz";



export const getGaleriasMetodoAnaluz = async ( req : Request, res : Response)=> {
    const query = { estado : true };

    try {
        const [total, galeriaMetodosAnaluz ] = await Promise.all([
            GaleriaMetodoAnaluz.findAndCountAll({ where: query }).then(result=>  result.count  )
            , GaleriaMetodoAnaluz.findAll({ where: query})
            // , Seccion.findAll({ where:{ estado: true } })
        ]) 
        res.json({
              total
            , galeriaMetodosAnaluz
        })   
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });    
    }
}



export const getGaleriaMetodoAnaluz = async ( req : Request, res : Response )=>{
    const { id }= req.params;

try {
   const galeria_metodo = await GaleriaMetodoAnaluz.findByPk( id );
   res.json( galeria_metodo ); 
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}

export const postGaleriaMetodoAnaluz = async ( req : Request, res : Response )=>{
    const { body } = req;
try {
    const { estado, ... galeriaMetodoBody } = body;
    const galeriaMetodo = GaleriaMetodoAnaluz.build(galeriaMetodoBody);
    await galeriaMetodo.save();
    res.json(galeriaMetodo);
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}

export const putGaleriaMetodoAnaluz = async ( req : Request, res : Response )=>{
 const { id } = req.params;
    const { body } = req;
try {
    const { videourl } = body;
    const data ={
        videourl:videourl.trim()
    }
    const galeriaMetodo = await GaleriaMetodoAnaluz.findByPk( id );
    await galeriaMetodo?.update(data);
    res.json(galeriaMetodo);
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}


export const deleteGaleriaMetodoAnaluz = async ( req : Request, res : Response )=>{
  const { id } = req.params;
try {
    const galeriaMetodo = await GaleriaMetodoAnaluz.findByPk( id );
    await galeriaMetodo?.update({ estado: false });
    return res.json(galeriaMetodo);
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}







