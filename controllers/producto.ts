
import { Request, Response } from "express";
import Producto from "../models/producto";



export const getProductos = async ( req : Request, res : Response)=> {
    const query = { estado : true };

    try {
        const [total, productos ] = await Promise.all([
            Producto.findAndCountAll({ where: query }).then(result=>  result.count  )
            , Producto.findAll({ where: query})
            // , Seccion.findAll({ where:{ estado: true } })
        ]) 
        res.json({
              total
            , productos
        })   
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });    
    }
}



export const getProducto = async ( req : Request, res : Response )=>{
    const { id }= req.params;

try {
    const producto = await Producto.findByPk( id );
    res.json(producto);   
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}

export const postProducto = async ( req : Request, res : Response )=>{
    const { body } = req;
try {
    const {  estado,... productoBody} = body;
    const producto =  Producto.build(productoBody);
    await producto.save();
    res.json(
        producto
    )    
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}

export const putProducto = async ( req : Request, res : Response )=>{
 const { id } = req.params;
    const { body } = req;
try {
    const {nombre } = body;
    const existe = await Producto.findOne({
        where:{
            nombre: nombre.trim(),
            estado:true,

        }
    })


    if (existe && existe.getDataValue('id') != id) {
        return res.status(400).json({
            msg: `El producto  ${ nombre } ya se encuentra registrado`
        })
    }

    const {  estado,... prodcutoBody} = body;
    const producto = await Producto.findByPk( id );
    await producto?.update( prodcutoBody );
    res.json(producto);    
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}


export const deleteProducto = async ( req : Request, res : Response )=>{
  const { id } = req.params;
try {
    const producto = await  Producto.findByPk( id );
    await producto?.update( { estado : false} )
    return res.json( producto );    
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}






