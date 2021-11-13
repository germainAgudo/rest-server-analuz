import { Request, Response } from "express";
import PagoMetodoanaluz from "../models/pago-metodo-analuz";




export const getPagosMetodoAnaluz = async ( req :Request,  res : Response)=>{
    const query = { estado : true };

try {

    const [total, pagos_metodoanaluz ] = await Promise.all([
        PagoMetodoanaluz.findAndCountAll({ where: query }).then(result=>  result.count  )
        , PagoMetodoanaluz.findAll({ where: query})
    ]) 
    res.json({
        total
        ,  pagos_metodoanaluz
    }) 
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });
}

}


export const getPagoMetodoAnaluz = async ( req : Request, res : Response)=>{
    const { id } = req.params;

    try {
        const pago_metodoanaluz = await PagoMetodoanaluz.findByPk( id );
        res.json( pago_metodoanaluz );
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
        
    }


}



export const postPagoMetodoAnaluz = async ( req: Request,  res : Response)=>{

    const { body } = req;

    try {
      const {  estado,... pagoAnaluzBody} = body;
      const pago_metodoanaluz =  PagoMetodoanaluz.build(pagoAnaluzBody);
      await pago_metodoanaluz.save();
      res.json(
          pago_metodoanaluz
      )
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }

}


export const putPagoMetodoAnaluz = async ( req : Request, res: Response )=> {

    const { id } = req.params;
    const { body } = req;

    try {
        const {  estado,... pagoAnaluzBody} = body;
        const pago_metodoanaluz = await PagoMetodoanaluz.findByPk( id );
        await pago_metodoanaluz?.update( pagoAnaluzBody );
        res.json(pago_metodoanaluz);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }



}



export const deletePagoMetodoAnaluz = async ( req : Request, res : Response )=>{
    const { id } = req.params;
    try {
        const pago_metodoanaluz = await  PagoMetodoanaluz.findByPk( id );
        
        // if ( !seccion || !seccion.getDataValue('estado') ) {
        //     return  res.status(400).json({
        //         msg: `No existe una sección con el id: ${ id }`
        //     });    
        // }
        await pago_metodoanaluz?.update( { estado : false} )
        return res.json( pago_metodoanaluz );
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });        
    }
}


