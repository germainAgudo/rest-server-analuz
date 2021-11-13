import { Request, Response } from "express";
import ProductoBeneficio from "../models/productobeneficio";



export const getProductoBeneficios = async ( req : Request, res : Response)=> {
    const query = { estado : true };

    try {
        const [total, producto_beneficio ] = await Promise.all([
            ProductoBeneficio.findAndCountAll({ where: query }).then(result=>  result.count  ),
            ProductoBeneficio.findAll({ where: query })

        ]) 
        res.json({
              total
            , producto_beneficio
        })   
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });    
    }
}



export const getProductoBeneficio = async ( req : Request, res : Response )=>{
    const { id }= req.params;

try {
    const producto_beneficio = await ProductoBeneficio.findByPk( id );
    res.json( producto_beneficio );
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}

export const postProductoBeneficio = async ( req : Request, res : Response )=>{
    const { body } = req;
try {
    const { estado, ... productoBeneficioBody } = body;

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

    const producto_beneficio = ProductoBeneficio.build( productoBeneficioBody );
    await producto_beneficio.save();
    res.json( producto_beneficio );    
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}

export const putProductoBeneficio = async ( req : Request, res : Response )=>{
 const { id } = req.params;
    const { body } = req;
try {
    const { estado, ... productoBeneficioBody } = body;
    const producto_beneficio = await ProductoBeneficio.findByPk( id );
    await producto_beneficio?.update(productoBeneficioBody);
    res.json( producto_beneficio )  
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}


export const deleteProductoBeneficio = async ( req : Request, res : Response )=>{
  const { id } = req.params;
try {
    const producto_beneficio = await ProductoBeneficio.findByPk( id );

    // if (req.usuario?.id != historial_clinico?.getDataValue('usuario_id') || req.usuario?.rol != 'ADMIN') {
    //     res.status(401).json({
    //         msg: `El id ${req.usuario?.id} no cuenta con los permisos necesarios - no puede hacer esto`
    //     })
    // }

    await producto_beneficio?.update( { estado : false } );
    return res.json(producto_beneficio);     
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}






