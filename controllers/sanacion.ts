import { Request, Response } from "express";
import Sanacion from "../models/sanacion";



export const getSanaciones = async ( req : Request, res : Response)=> {
    const query = { estado : true };

    try {
        const [total, sanaciones ] = await Promise.all([
            Sanacion.findAndCountAll({ where: query }).then(result=>  result.count  ),
            Sanacion.findAll({ where: query })

        ]) 
        res.json({
              total
            , sanaciones
        })   
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });    
    }
}



export const getSanacion = async ( req : Request, res : Response )=>{
    const { id }= req.params;

try {
    const sanacion = await Sanacion.findByPk( id );
    res.json( sanacion );
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}

export const postSanacion = async ( req : Request, res : Response )=>{
    const { body } = req;
try {
    const { estado, ... sanacionBody } = body;

    const {taller_id} = req.body;
    sanacionBody.usuario_id=req.usuario?.id
   
    const existe = await  Sanacion.findOne({
        where:{
            taller_id: taller_id 
            ,usuario_id :req.usuario?.id
            , estado:true

        }
    });

    

    if (existe) {

        return res.status(400).json({
            msg: `El usuario  ${ req.usuario?.id },  actualmente está inscrito en el taller: ${ taller_id }`
        })
    }

    const sanacion = Sanacion.build( sanacionBody );
    await sanacion.save();
    res.json( sanacion );    
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}

export const putSanacion = async ( req : Request, res : Response )=>{
 const { id } = req.params;
    const { body } = req;
try {
    const { estado, ... sanacionBody } = body;
    const sanacion = await Sanacion.findByPk( id );
    await sanacion?.update(sanacionBody);
    res.json( sanacion )  
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}


export const deleteSanacion = async ( req : Request, res : Response )=>{
  const { id } = req.params;
try {
    const sanacion = await Sanacion.findByPk( id );

    if (req.usuario?.id != sanacion?.getDataValue('usuario_id') || req.usuario?.rol != 'ADMIN') {
        res.status(401).json({
            msg: `El id ${req.usuario?.id} no cuenta con los permisos necesarios - no puede hacer esto`
        })
    }

    await sanacion?.update( { estado : false } );
    return res.json(sanacion);     
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}






