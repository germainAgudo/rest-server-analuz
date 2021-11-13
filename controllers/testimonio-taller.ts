import { Request, Response } from "express";
import TestimonioTaller from "../models/testimonio-taller";




export const getTestimoniosTalleres = async ( req :Request,  res : Response)=>{
    const query = { estado : true };

try {

    const [total, testimonios_talleres ] = await Promise.all([
        TestimonioTaller.findAndCountAll({ where: query }).then(result=>  result.count  )
        , TestimonioTaller.findAll({ where: query})
    ]) 
    res.json({
        total
        ,  testimonios_talleres
    }) 
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });
}

}


export const getTestimonioTaller = async ( req : Request, res : Response)=>{
    const { id } = req.params;

    try {
        const testimonio_taller = await TestimonioTaller.findByPk( id );
        res.json( testimonio_taller );
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
        
    }


}



export const postTestimonioTaller = async ( req: Request,  res : Response)=>{

    const { body } = req;

    try {
      const {  estado,... testimonioTallerBody} = body;
      const testimonio_taller =  TestimonioTaller.build(testimonioTallerBody);
      await testimonio_taller.save();
      res.json(
          testimonio_taller
      )
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }

}


export const putTestimonioTaller = async ( req : Request, res: Response )=> {

    const { id } = req.params;
    const { body } = req;

    try {
        const {  testimonio} = body;
        const testimonioTallerBody ={
            testimonio : testimonio.trim()
        }
        const testimonio_taller = await TestimonioTaller.findByPk( id );

        if (req.usuario?.id != testimonio_taller?.getDataValue('usuario_id') || req.usuario?.rol != 'ADMIN') {
            res.status(401).json({
                msg: `El id ${req.usuario?.id} no cuenta con los permisos necesarios - no puede hacer esto`
            })
        }


        await testimonio_taller?.update( testimonioTallerBody );
        res.json(testimonio_taller);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }



}



export const deleteTestimonioTaller = async ( req : Request, res : Response )=>{
    const { id } = req.params;
    try {
        const testimonio_taller = await  TestimonioTaller.findByPk( id );
        
        // if ( !seccion || !seccion.getDataValue('estado') ) {
        //     return  res.status(400).json({
        //         msg: `No existe una sección con el id: ${ id }`
        //     });    
        // }
        

    if (req.usuario?.id != testimonio_taller?.getDataValue('usuario_id') || req.usuario?.rol != 'ADMIN') {
        res.status(401).json({
            msg: `El id ${req.usuario?.id} no cuenta con los permisos necesarios - no puede hacer esto`
        })
    }
        await testimonio_taller?.update( { estado : false} )
        return res.json( testimonio_taller );
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });        
    }
}


