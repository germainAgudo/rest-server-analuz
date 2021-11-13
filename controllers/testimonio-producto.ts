import { Request, Response } from "express";
import TestimonioProducto from "../models/testimonio-producto";




export const getTestimoniosProductos = async ( req :Request,  res : Response)=>{
    const query = { estado : true };

try {

    const [total, testimonios_productos ] = await Promise.all([
        TestimonioProducto.findAndCountAll({ where: query }).then(result=>  result.count  )
        , TestimonioProducto.findAll({ where: query})
    ]) 
    res.json({
        total
        ,  testimonios_productos
    }) 
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });
}

}


export const getTestimonioProducto = async ( req : Request, res : Response)=>{
    const { id } = req.params;

    try {
        const testimonio_producto = await TestimonioProducto.findByPk( id );
        res.json( testimonio_producto );
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
        
    }


}



export const postTestimonioProducto = async ( req: Request,  res : Response)=>{

    const { body } = req;

    try {
      const {  estado,... testimonioProductoBody} = body;
      const testimonio_producto =  TestimonioProducto.build(testimonioProductoBody);
      await testimonio_producto.save();
      res.json(
          testimonio_producto
      )
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }

}


export const putTestimonioProducto = async ( req : Request, res: Response )=> {

    const { id } = req.params;
    const { body } = req;

    try {
        const {  testimonio} = body;
        const testimonioProductoBody ={
            testimonio : testimonio.trim()
        }
        const testimonio_producto = await TestimonioProducto.findByPk( id );

        if (req.usuario?.id != testimonio_producto?.getDataValue('usuario_id') || req.usuario?.rol != 'ADMIN') {
            res.status(401).json({
                msg: `El id ${req.usuario?.id} no cuenta con los permisos necesarios - no puede hacer esto`
            })
        }


        await testimonio_producto?.update( testimonioProductoBody );
        res.json(testimonio_producto);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }



}



export const deleteTestimonioProducto = async ( req : Request, res : Response )=>{
    const { id } = req.params;
    try {
        const testimonio_producto = await  TestimonioProducto.findByPk( id );
        
        // if ( !seccion || !seccion.getDataValue('estado') ) {
        //     return  res.status(400).json({
        //         msg: `No existe una sección con el id: ${ id }`
        //     });    
        // }
        

    if (req.usuario?.id != testimonio_producto?.getDataValue('usuario_id') || req.usuario?.rol != 'ADMIN') {
        res.status(401).json({
            msg: `El id ${req.usuario?.id} no cuenta con los permisos necesarios - no puede hacer esto`
        })
    }
        await testimonio_producto?.update( { estado : false} )
        return res.json( testimonio_producto );
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });        
    }
}


