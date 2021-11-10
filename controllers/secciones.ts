import { Request, Response } from "express";
import Seccion from '../models/seccion';




export const getSecciones = async ( req :Request,  res : Response)=>{
    const query = { estado : true };

// const secciones = await Seccion.findAll();
// const secciones = await Seccion.findAndCountAll()


try {

    const [total, secciones ] = await Promise.all([
        Seccion.findAndCountAll({ where: query }).then(result=>  result.count  )
        , Seccion.findAll({ where: query})
        // , Seccion.findAll({ where:{ estado: true } })
    ]) 
    res.json({
        total
        , secciones
    }) 
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });
}

}


export const getSeccion = async ( req : Request, res : Response)=>{
    const { id } = req.params;

    try {
        const seccion = await Seccion.findByPk( id );
        res.json(seccion);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
        
    }


}



export const postSeccion = async ( req: Request,  res : Response)=>{

    const { body } = req;

    try {
      const {  estado,... seccionBody} = body;
      const seccion =  Seccion.build(seccionBody);
      await seccion.save();
      res.json({
          seccion
      })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }

}


export const putSeccion = async ( req : Request, res: Response )=> {

    const { id } = req.params;
    const { body } = req;

    try {
        const {  estado,... seccionBody} = body;
        const seccion = await Seccion.findByPk( id );
        await seccion?.update( seccionBody );
        res.json(seccion);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }



}



export const deleteSeccion = async ( req : Request, res : Response )=>{
    const { id } = req.params;
    try {
        const seccion = await  Seccion.findByPk( id );
        
        // if ( !seccion || !seccion.getDataValue('estado') ) {
        //     return  res.status(400).json({
        //         msg: `No existe una sección con el id: ${ id }`
        //     });    
        // }
        await seccion?.update( { estado : false} )
        return res.json( seccion );
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });        
    }
}


