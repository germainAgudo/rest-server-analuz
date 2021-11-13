import { Request, Response } from "express";
import Pago from "../models/pago";




export const getPagos = async ( req :Request,  res : Response)=>{
    const query = { estado : true };

try {

    const [total, pagos ] = await Promise.all([
        Pago.findAndCountAll({ where: query }).then(result=>  result.count  )
        , Pago.findAll({ where: query})
    ]) 
    res.json({
        total
        , pagos
    }) 
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });
}

}


export const getPago = async ( req : Request, res : Response)=>{
    const { id } = req.params;

    try {
        const pago = await Pago.findByPk( id );
        res.json( pago );
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
        
    }


}



export const postPago = async ( req: Request,  res : Response)=>{

    const { body } = req;

    try {
      const {  estado,... pagoBody} = body;
      const pago =  Pago.build(pagoBody);
      await pago.save();
      res.json(
          pago
      )
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }

}


export const putPago = async ( req : Request, res: Response )=> {

    const { id } = req.params;
    const { body } = req;

    try {
        const {  estado,... pagoBody} = body;
        const pago = await Pago.findByPk( id );
        await pago?.update( pagoBody );
        res.json(pago);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }



}



export const deletePago = async ( req : Request, res : Response )=>{
    const { id } = req.params;
    try {
        const pago = await  Pago.findByPk( id );
        
        // if ( !seccion || !seccion.getDataValue('estado') ) {
        //     return  res.status(400).json({
        //         msg: `No existe una sección con el id: ${ id }`
        //     });    
        // }
        await pago?.update( { estado : false} )
        return res.json( pago );
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });        
    }
}


