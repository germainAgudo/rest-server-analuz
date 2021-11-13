import { Request, Response } from "express";
import TestimonioTratamiento from "../models/testimonio-tratamiento";




export const getTestimoniosTratamientos = async ( req :Request,  res : Response)=>{
    const query = { estado : true };

try {

    const [total, testimonios_tratamientos ] = await Promise.all([
        TestimonioTratamiento.findAndCountAll({ where: query }).then(result=>  result.count  )
        , TestimonioTratamiento.findAll({ where: query})
    ]) 
    res.json({
        total
        ,  testimonios_talleres: testimonios_tratamientos
    }) 
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });
}

}


export const getTestimonioTratamiento = async ( req : Request, res : Response)=>{
    const { id } = req.params;

    try {
        const testimonio_tratamiento = await TestimonioTratamiento.findByPk( id );
        res.json( testimonio_tratamiento );
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
        
    }


}



export const postTestimonioTratamiento = async ( req: Request,  res : Response)=>{

    const { body } = req;

    try {
      const {  estado,... testimonioTratamientoBody} = body;
      const testimonio_tratamiento =  TestimonioTratamiento.build(testimonioTratamientoBody);
      await testimonio_tratamiento.save();
      res.json(
          testimonio_tratamiento
      )
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }

}


export const putTestimonioTratamiento = async ( req : Request, res: Response )=> {

    const { id } = req.params;
    const { body } = req;

    try {
        const {  testimonio} = body;
        const testimonioTratamientoBody ={
            testimonio : testimonio.trim()
        }
        const testimonio_tratamiento = await TestimonioTratamiento.findByPk( id );

        if (req.usuario?.id != testimonio_tratamiento?.getDataValue('usuario_id') || req.usuario?.rol != 'ADMIN') {
            res.status(401).json({
                msg: `El id ${req.usuario?.id} no cuenta con los permisos necesarios - no puede hacer esto`
            })
        }


        await testimonio_tratamiento?.update( testimonioTratamientoBody );
        res.json(testimonio_tratamiento);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }



}



export const deleteTestimonioTratamiento = async ( req : Request, res : Response )=>{
    const { id } = req.params;
    try {
        const testimonio_tratamiento = await  TestimonioTratamiento.findByPk( id );
        
        // if ( !seccion || !seccion.getDataValue('estado') ) {
        //     return  res.status(400).json({
        //         msg: `No existe una sección con el id: ${ id }`
        //     });    
        // }
        

    if (req.usuario?.id != testimonio_tratamiento?.getDataValue('usuario_id') || req.usuario?.rol != 'ADMIN') {
        res.status(401).json({
            msg: `El id ${req.usuario?.id} no cuenta con los permisos necesarios - no puede hacer esto`
        })
    }
        await testimonio_tratamiento?.update( { estado : false} )
        return res.json( testimonio_tratamiento );
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });        
    }
}


