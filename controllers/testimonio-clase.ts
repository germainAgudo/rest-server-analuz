import { Request, Response } from "express";
import TestimonioClase from "../models/testimonio-clase";




export const getTestimoniosClases = async ( req :Request,  res : Response)=>{
    const query = { estado : true };

try {

    const [total, testimonios_clases ] = await Promise.all([
        TestimonioClase.findAndCountAll({ where: query }).then(result=>  result.count  )
        , TestimonioClase.findAll({ where: query})
    ]) 
    res.json({
        total
        ,  testimonios_clases
    }) 
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });
}

}


export const getTestimonioClase = async ( req : Request, res : Response)=>{
    const { id } = req.params;

    try {
        const testimonio_clase = await TestimonioClase.findByPk( id );
        res.json( testimonio_clase );
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
        
    }


}



export const postTestimonioClase = async ( req: Request,  res : Response)=>{

    const { body } = req;

    try {
      const {  estado,... testimonioClaseBody} = body;
      const testimonio_clase =  TestimonioClase.build(testimonioClaseBody);
      await testimonio_clase.save();
      res.json(
          testimonio_clase
      )
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }

}


export const putTestimonioClase = async ( req : Request, res: Response )=> {

    const { id } = req.params;
    const { body } = req;

    try {
        const {  testimonio} = body;
        const testimonioClaseBody ={
            testimonio : testimonio.trim()
        }
        const testimonio_clase = await TestimonioClase.findByPk( id );

        if (req.usuario?.id != testimonio_clase?.getDataValue('usuario_id') || req.usuario?.rol != 'ADMIN') {
            res.status(401).json({
                msg: `El id ${req.usuario?.id} no cuenta con los permisos necesarios - no puede hacer esto`
            })
        }


        await testimonio_clase?.update( testimonioClaseBody );
        res.json(testimonio_clase);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }



}



export const deleteTestimonioClase = async ( req : Request, res : Response )=>{
    const { id } = req.params;
    try {
        const testimonio_clase = await  TestimonioClase.findByPk( id );
        
        // if ( !seccion || !seccion.getDataValue('estado') ) {
        //     return  res.status(400).json({
        //         msg: `No existe una sección con el id: ${ id }`
        //     });    
        // }
        

    if (req.usuario?.id != testimonio_clase?.getDataValue('usuario_id') || req.usuario?.rol != 'ADMIN') {
        res.status(401).json({
            msg: `El id ${req.usuario?.id} no cuenta con los permisos necesarios - no puede hacer esto`
        })
    }
        await testimonio_clase?.update( { estado : false} )
        return res.json( testimonio_clase );
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });        
    }
}


