import { Request, Response } from "express";
import ActuaContra from "../models/productobeneficio";



export const getProductoActuaContras = async ( req : Request, res : Response)=> {
    const query = { estado : true };

    try {
        const [total, producto_actuacontra ] = await Promise.all([
            ActuaContra.findAndCountAll({ where: query }).then(result=>  result.count  ),
            ActuaContra.findAll({ where: query })

        ]) 
        res.json({
              total
            , producto_beneficio: producto_actuacontra
        })   
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });    
    }
}



export const getProductoActuaContra = async ( req : Request, res : Response )=>{
    const { id }= req.params;

try {
    const producto_actuacontra = await ActuaContra.findByPk( id );
    res.json( producto_actuacontra );
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}

export const postProductoActuaContra = async ( req : Request, res : Response )=>{
    const { body } = req;
try {
    const { estado, ... productoActuacontraBody } = body;

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

    const producto_actuacontra = ActuaContra.build( productoActuacontraBody );
    await producto_actuacontra.save();
    res.json( producto_actuacontra );    
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}

export const putProductoActuaContra = async ( req : Request, res : Response )=>{
 const { id } = req.params;
    const { body } = req;
try {
    const { estado, ... productoActuacontraBody } = body;
    const producto_actuacontra = await ActuaContra.findByPk( id );
    await producto_actuacontra?.update(productoActuacontraBody);
    res.json( producto_actuacontra )  
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}


export const deleteProductoActuaContra = async ( req : Request, res : Response )=>{
  const { id } = req.params;
try {
    const producto_actuacontra = await ActuaContra.findByPk( id );

    // if (req.usuario?.id != historial_clinico?.getDataValue('usuario_id') || req.usuario?.rol != 'ADMIN') {
    //     res.status(401).json({
    //         msg: `El id ${req.usuario?.id} no cuenta con los permisos necesarios - no puede hacer esto`
    //     })
    // }

    await producto_actuacontra?.update( { estado : false } );
    return res.json(producto_actuacontra);     
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}






