
import { Request, Response } from "express";
import Producto from "../models/producto";



export const getGaleriasProductos = async ( req : Request, res : Response)=> {
    const query = { estado : true };

    try {
        const [total, galeriaProducto ] = await Promise.all([
            Producto.findAndCountAll({ where: query }).then(result=>  result.count  )
            , Producto.findAll({ where: query})
            // , Seccion.findAll({ where:{ estado: true } })
        ]) 
        res.json({
              total
            , galeriaProducto
        })   
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });    
    }
}



export const getGaleriaProducto = async ( req : Request, res : Response )=>{
    const { id }= req.params;

try {
   const galeria_producto = await Producto.findByPk( id );
   res.json( galeria_producto ); 
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}

export const postGaleriaProducto = async ( req : Request, res : Response )=>{
    const { body } = req;
try {
    const { estado, ... galeriaProductoBody } = body;
    const galeriaProducto = Producto.build(galeriaProductoBody);
    await galeriaProducto.save();
    res.json(galeriaProducto);
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}

export const putGaleriaProducto = async ( req : Request, res : Response )=>{
 const { id } = req.params;
    const { body } = req;
try {
    const { img } = body;
    const data ={
        img:img.trim()
    }
    const galeriaProducto = await Producto.findByPk( id );
    await galeriaProducto?.update(data);
    res.json(galeriaProducto);
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}


export const deleteGaleriaProducto = async ( req : Request, res : Response )=>{
  const { id } = req.params;
try {
    const galeriaProducto = await Producto.findByPk( id );
    await galeriaProducto?.update({ estado: false });
    return res.json(galeriaProducto);
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}







