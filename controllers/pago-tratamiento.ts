import { Request, Response } from "express";

import PagoTratamiento from "../models/pago-tratamiento";




export const getPagosTratamientos = async ( req :Request,  res : Response)=>{
    const query = { estado : true };

try {

    const [total, pagos_tratamientos ] = await Promise.all([
        PagoTratamiento.findAndCountAll({ where: query }).then(result=>  result.count  )
        , PagoTratamiento.findAll({ where: query})
    ]) 
    res.json({
        total
        ,  pagos_tratamientos
    }) 
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });
}

}


export const getPagoTratamiento = async ( req : Request, res : Response)=>{
    const { id } = req.params;

    try {
        const pago_tratamiento = await PagoTratamiento.findByPk( id );
        res.json( pago_tratamiento );
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
        
    }


}



export const postTratamiento = async ( req: Request,  res : Response)=>{

    const { body } = req;

    try {
      const {  estado,... pagoTratamientoBody} = body;
      const pago_tratamiento =  PagoTratamiento.build(pagoTratamientoBody);
      await pago_tratamiento.save();
      res.json(
          pago_tratamiento
      )
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }

}


export const putPagoTratamiento = async ( req : Request, res: Response )=> {

    const { id } = req.params;
    const { body } = req;

    try {
        const {  estado,... pagoTratamientoBody} = body;
        const pago_tratamiento = await PagoTratamiento.findByPk( id );
        await pago_tratamiento?.update( pagoTratamientoBody );
        res.json(pago_tratamiento);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }



}



export const deletePagoTratamiento = async ( req : Request, res : Response )=>{
    const { id } = req.params;
    try {
        const pago_tratamiento = await  PagoTratamiento.findByPk( id );
        
        // if ( !seccion || !seccion.getDataValue('estado') ) {
        //     return  res.status(400).json({
        //         msg: `No existe una sección con el id: ${ id }`
        //     });    
        // }
        await pago_tratamiento?.update( { estado : false} )
        return res.json( pago_tratamiento );
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });        
    }
}


