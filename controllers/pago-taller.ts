import { Request, Response } from "express";
import PagoTaller from "../models/pago-taller";




export const getPagosTalleres = async ( req :Request,  res : Response)=>{
    const query = { estado : true };

try {

    const [total, pagos_talleres ] = await Promise.all([
        PagoTaller.findAndCountAll({ where: query }).then(result=>  result.count  )
        , PagoTaller.findAll({ where: query})
    ]) 
    res.json({
        total
        ,  pagos_talleres
    }) 
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });
}

}


export const getPagoTaller = async ( req : Request, res : Response)=>{
    const { id } = req.params;

    try {
        const pago_taller = await PagoTaller.findByPk( id );
        res.json( pago_taller );
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
        
    }


}



export const postTaller = async ( req: Request,  res : Response)=>{

    const { body } = req;

    try {
      const {  estado,... pagoTallerBody} = body;
      const pago_taller =  PagoTaller.build(pagoTallerBody);
      await pago_taller.save();
      res.json(
          pago_taller
      )
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }

}


export const putPagoTaller = async ( req : Request, res: Response )=> {

    const { id } = req.params;
    const { body } = req;

    try {
        const {  estado,... pagoTallerBody} = body;
        const pago_taller = await PagoTaller.findByPk( id );
        await pago_taller?.update( pagoTallerBody );
        res.json(pago_taller);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }



}



export const deletePagoTaller = async ( req : Request, res : Response )=>{
    const { id } = req.params;
    try {
        const pago_taller = await  PagoTaller.findByPk( id );
        
        // if ( !seccion || !seccion.getDataValue('estado') ) {
        //     return  res.status(400).json({
        //         msg: `No existe una sección con el id: ${ id }`
        //     });    
        // }
        await pago_taller?.update( { estado : false} )
        return res.json( pago_taller );
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });        
    }
}


