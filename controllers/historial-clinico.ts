import { Request, Response } from "express";
import HistorialClinico from "../models/historial-clinico";



export const getHistorialesClinicos = async ( req : Request, res : Response)=> {
    const query = { estado : true };

    try {
        const [total, historiales_clinicos ] = await Promise.all([
            HistorialClinico.findAndCountAll({ where: query }).then(result=>  result.count  ),
            HistorialClinico.findAll({ where: query })

        ]) 
        res.json({
              total
            , historiales_clinicos
        })   
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });    
    }
}



export const getHistorialClinico = async ( req : Request, res : Response )=>{
    const { id }= req.params;

try {
    const historial_clinico = await HistorialClinico.findByPk( id );
    res.json( historial_clinico );
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}

export const postHistorialClinico = async ( req : Request, res : Response )=>{
    const { body } = req;
try {
    const { estado, ... historialBody } = body;

    // const {tratamiento_id} = req.body;
    // historialBody.usuario_id=req.usuario?.id
   
    // const existe = await  HistorialClinico.findOne({
    //     where:{
    //         tratamiento_id: tratamiento_id 
    //         ,usuario_id :req.usuario?.id
    //         , estado:true

    //     }
    // });

    

    // if (existe) {

    //     return res.status(400).json({
    //         msg: `El usuario  ${ req.usuario?.id }  el tratamiento ${ tratamiento_id }`
    //     })
    // }

    const historial_clinico = HistorialClinico.build( historialBody );
    await historial_clinico.save();
    res.json( historial_clinico );    
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}

export const putHistorialClinico = async ( req : Request, res : Response )=>{
 const { id } = req.params;
    const { body } = req;
try {
    const { estado, ... historialBody } = body;
    const historial_clinico = await HistorialClinico.findByPk( id );
    await historial_clinico?.update(historialBody);
    res.json( historial_clinico )  
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}


export const deleteHistorialClinico = async ( req : Request, res : Response )=>{
  const { id } = req.params;
try {
    const historial_clinico = await HistorialClinico.findByPk( id );

    if (req.usuario?.id != historial_clinico?.getDataValue('usuario_id') || req.usuario?.rol != 'ADMIN') {
        res.status(401).json({
            msg: `El id ${req.usuario?.id} no cuenta con los permisos necesarios - no puede hacer esto`
        })
    }

    await historial_clinico?.update( { estado : false } );
    return res.json(historial_clinico);     
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}






