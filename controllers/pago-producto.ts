import { Request, Response } from "express";
import PagoProducto from "../models/pago-producto";




export const getPagosProductos = async ( req :Request,  res : Response)=>{
    const query = { estado : true };

try {

    const [total, pagosProducto ] = await Promise.all([
        PagoProducto.findAndCountAll({ where: query }).then(result=>  result.count  )
        , PagoProducto.findAll({ where: query})
    ]) 
    res.json({
        total
        , pagosProducto
    }) 
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });
}

}


export const getPagoProducto = async ( req : Request, res : Response)=>{
    const { id } = req.params;

    try {
        const pago_producto = await PagoProducto.findByPk( id );
        res.json( pago_producto );
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
        
    }


}



export const postPagoProducto = async ( req: Request,  res : Response)=>{

    const { body } = req;

    try {
      const {  estado,... pagoProductoBody} = body;
      const pago_producto =  PagoProducto.build(pagoProductoBody);
      await pago_producto.save();
      res.json(
          pago_producto
      )
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }

}


export const putPagoProducto = async ( req : Request, res: Response )=> {

    const { id } = req.params;
    const { body } = req;

    try {
        const {  estado,... pagoProductoBody} = body;
        const pago_producto = await PagoProducto.findByPk( id );
        await pago_producto?.update( pagoProductoBody );
        res.json(pago_producto);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }



}



export const deletePagoProducto = async ( req : Request, res : Response )=>{
    const { id } = req.params;
    try {
        const pago_producto = await  PagoProducto.findByPk( id );
        
        // if ( !seccion || !seccion.getDataValue('estado') ) {
        //     return  res.status(400).json({
        //         msg: `No existe una sección con el id: ${ id }`
        //     });    
        // }
        await pago_producto?.update( { estado : false} )
        return res.json( pago_producto );
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });        
    }
}


