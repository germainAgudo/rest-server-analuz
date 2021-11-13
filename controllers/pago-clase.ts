import { Request, Response } from "express";
import PagoClase from "../models/pago-clase";




export const getPagosClases = async ( req :Request,  res : Response)=>{
    const query = { estado : true };

try {

    const [total, pagosClases ] = await Promise.all([
        PagoClase.findAndCountAll({ where: query }).then(result=>  result.count  )
        , PagoClase.findAll({ where: query})
    ]) 
    res.json({
        total
        ,  pagosClases
    }) 
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });
}

}


export const getPagoClase = async ( req : Request, res : Response)=>{
    const { id } = req.params;

    try {
        const pago_clase = await PagoClase.findByPk( id );
        res.json( pago_clase );
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
        
    }


}



export const postPagoClase = async ( req: Request,  res : Response)=>{

    const { body } = req;

    try {
      const {  estado,... pagoClaseBody} = body;
      const pago_clase =  PagoClase.build(pagoClaseBody);
      await pago_clase.save();
      res.json(
          pago_clase
      )
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }

}


export const putPagoClase = async ( req : Request, res: Response )=> {

    const { id } = req.params;
    const { body } = req;

    try {
        const {  estado,... pagoClaseBody} = body;
        const pago_clase = await PagoClase.findByPk( id );
        await pago_clase?.update( pagoClaseBody );
        res.json(pago_clase);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }



}



export const deletePagoClase = async ( req : Request, res : Response )=>{
    const { id } = req.params;
    try {
        const pago_clase = await  PagoClase.findByPk( id );
        
        // if ( !seccion || !seccion.getDataValue('estado') ) {
        //     return  res.status(400).json({
        //         msg: `No existe una sección con el id: ${ id }`
        //     });    
        // }
        await pago_clase?.update( { estado : false} )
        return res.json( pago_clase );
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });        
    }
}


