
import { Request, Response } from "express";
import GaleriaTaller from "../models/galeria-taller";
import path from "path";
import fs  from "fs"
import Taller from "../models/taller";


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

    if (!req.file) {
        return res.status(400).json({
            msg: `La imagen es obligatoria`
        })
    }


    if (! body.taller_id) {
    const  pathImagen  = req.file.path;
        if (fs.existsSync( pathImagen)) {
            fs.unlinkSync( pathImagen);
             }  
        
        return res.status(400).json({
            msg: `El taller es obligatorio`
        })  
    }  
const {taller_id } = body;

    const existe_id = await Taller.findByPk( taller_id );
    if ( !existe_id || !existe_id.getDataValue('estado') ) {
        const  pathImagen  = req.file.path;
        if (fs.existsSync( pathImagen)) {
            fs.unlinkSync( pathImagen);
             }  
        return res.status(400).json({
            msg: `El id ${ taller_id } no existe`
        })
    }



    const    galeriaTallerBody ={
        taller_id
        , img : req.file.path
    }
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
    // const { body } = req;
try {
    if (!req.file) {
        return res.status(400).json({
            msg: `La imagen es obligatoria`
        })
    }
const galeria_taller  = await GaleriaTaller.findByPk(id);
if (galeria_taller?.getDataValue('img') != null) {
    const pathImagen = path.resolve(galeria_taller?.getDataValue('img'));

    if (fs.existsSync( pathImagen )) {
        fs.unlinkSync( pathImagen )
    }
}

galeria_taller?.setDataValue('img', req.file?.path);
galeria_taller?.save();
res.json(galeria_taller);



    // const { img } = body;
    // const data ={
    //     img:img.trim()
    // }
    // const galeriaTaller = await GaleriaTaller.findByPk( id );
    // await galeriaTaller?.update(data);
    // res.json(galeriaTaller);
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







