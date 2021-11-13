
import { Request, Response } from "express";
import ActuaContra from "../models/actua-contra";



export const getActuaContras = async ( req : Request, res : Response)=> {
    const query = { estado : true };

    try {
        const [total, actua_contra ] = await Promise.all([
            ActuaContra.findAndCountAll({ where: query }).then(result=>  result.count  )
            , ActuaContra.findAll({ where: query})
            // , Seccion.findAll({ where:{ estado: true } })
        ]) 
        res.json({
              total
            , actua_contra
        })   
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });    
    }
}



export const getActuaContra = async ( req : Request, res : Response )=>{
    const { id }= req.params;

try {
    const actua_contra = await ActuaContra.findByPk( id );
    res.json(actua_contra);   
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}

export const postActuaContra = async ( req : Request, res : Response )=>{
    const { body } = req;
try {
    const {  estado,... actuaContraBody} = body;
    const actua_contra =  ActuaContra.build(actuaContraBody);
    await actua_contra.save();
    res.json(actua_contra)    
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}

export const putActuaContra = async ( req : Request, res : Response )=>{
 const { id } = req.params;
    const { body } = req;
try {
    const {descripcion } = body;
    const existe = await ActuaContra.findOne({
        where:{
            descripcion: descripcion.trim(),
            estado:true,

        }
    })


    if (existe && existe.getDataValue('id') != id) {
        return res.status(400).json({
            msg: `Lo sentimos, el "Actua contra": "${ descripcion }" ya se encuentra registrado`
        })
    }

    const {  estado,... actuaContraBody} = body;
    const actua_contra = await ActuaContra.findByPk( id );
    await actua_contra?.update( actuaContraBody );
    res.json(actua_contra);    
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}


export const deleteActuaContra = async ( req : Request, res : Response )=>{
  const { id } = req.params;
try {
    const actua_contra = await  ActuaContra.findByPk( id );
    await actua_contra?.update( { estado : false} )
    return res.json( actua_contra );    
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}






