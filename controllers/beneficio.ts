
import { Request, Response } from "express";
import Beneficio from "../models/beneficio";



export const getBeneficios = async ( req : Request, res : Response)=> {
    const query = { estado : true };

    try {
        const [total, beneficios ] = await Promise.all([
            Beneficio.findAndCountAll({ where: query }).then(result=>  result.count  )
            , Beneficio.findAll({ where: query})
            // , Seccion.findAll({ where:{ estado: true } })
        ]) 
        res.json({
              total
            , beneficios
        })   
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });    
    }
}



export const getBeneficio = async ( req : Request, res : Response )=>{
    const { id }= req.params;

try {
    const beneficio = await Beneficio.findByPk( id );
    res.json(beneficio);   
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}

export const postBeneficio = async ( req : Request, res : Response )=>{
    const { body } = req;
try {
    const {  estado,... beneficioBody} = body;
    const beneficio =  Beneficio.build(beneficioBody);
    await beneficio.save();
    res.json(beneficio)    
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}

export const putBeneficio = async ( req : Request, res : Response )=>{
 const { id } = req.params;
    const { body } = req;
try {
    const {descripcion } = body;
    const existe = await Beneficio.findOne({
        where:{
            descripcion: descripcion.trim(),
            estado:true,

        }
    })


    if (existe && existe.getDataValue('id') != id) {
        return res.status(400).json({
            msg: `Lo sentimos, el beneficio: "${ descripcion }" ya se encuentra registrado`
        })
    }

    const {  estado,... beneficioBody} = body;
    const beneficio = await Beneficio.findByPk( id );
    await beneficio?.update( beneficioBody );
    res.json(beneficio);    
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}


export const deleteBeneficio = async ( req : Request, res : Response )=>{
  const { id } = req.params;
try {
    const beneficio = await  Beneficio.findByPk( id );
    await beneficio?.update( { estado : false} )
    return res.json( beneficio );    
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}






