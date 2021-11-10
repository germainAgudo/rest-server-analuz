import { Request, Response } from "express";
import Testimonio from "../models/testimonio";


export const getTestimonios = async ( req : Request, res : Response)=> {
    const query = { estado : true };

    try {
        const [total, testimonios ] = await Promise.all([
            Testimonio.findAndCountAll({ where: query }).then(result=>  result.count  )
            , Testimonio.findAll({ where: query})
            // , Seccion.findAll({ where:{ estado: true } })
        ]) 
        res.json({
              total
            , testimonios
        })   
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });    
    }
}



export const getTestimonio = async ( req : Request, res : Response )=>{
    const { id }= req.params;
try {
    const testimonio = await Testimonio.findByPk( id );
    res.json( testimonio );
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}

export const postTestimonio = async ( req : Request, res : Response )=>{
    const { body } = req;
try {
    const { estado, ... testimonioBody } = body;
    testimonioBody.usuario_id=req.usuario?.id
    const testimonio = Testimonio.build( testimonioBody );
    await testimonio.save();
    res.json({
        testimonio
    })
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}

export const putTestimonio = async ( req : Request, res : Response )=>{
    const { id } = req.params;
    const { body } = req;
try {
    
    const { estado, ... testimonioBody } = body;
    const testimonio = await Testimonio.findByPk( id );
    await testimonio?.update(testimonioBody);
    res.json( testimonio )
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}




export const deleteTestimonio = async ( req : Request, res : Response )=>{
   const { id } = req.params;

try {

    const testimonio = await Testimonio.findByPk( id );

    if (req.usuario?.id != testimonio?.getDataValue('usuario_id') || req.usuario?.rol != 'ADMIN') {
        res.status(401).json({
            msg: `El id ${req.usuario?.id} no cuenta con los permisos necesarios - no puede hacer esto`
        })
    }

    await testimonio?.update( { estado : false } );
    return res.json(testimonio);    
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}


const validarPermisoTestimonio =(req: Request, id : any) =>{
    if (req.usuario?.id ==id) {
        return true;
    }
    return false;
}

