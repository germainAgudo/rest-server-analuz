import { Request, Response } from "express";
import TestimonioMetodoanaluz from "../models/testimonio-metodo-analuz";




export const getTestimoniosMetodosAnaluz = async ( req :Request,  res : Response)=>{
    const query = { estado : true };

try {

    const [total, testimonios_analuz ] = await Promise.all([
        TestimonioMetodoanaluz.findAndCountAll({ where: query }).then(result=>  result.count  )
        , TestimonioMetodoanaluz.findAll({ where: query})
    ]) 
    res.json({
        total
        ,  testimonios_analuz
    }) 
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });
}

}


export const getTestimonioMetodoAnaluz = async ( req : Request, res : Response)=>{
    const { id } = req.params;

    try {
        const testimonio_analuz = await TestimonioMetodoanaluz.findByPk( id );
        res.json( testimonio_analuz );
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
        
    }


}



export const postTestimonioMetodoAnaluz = async ( req: Request,  res : Response)=>{

    const { body } = req;

    try {
      const {  estado,... testimonioAnaluzBody} = body;
      const testimonio_analuz =  TestimonioMetodoanaluz.build(testimonioAnaluzBody);
      await testimonio_analuz.save();
      res.json(
          testimonio_analuz
      )
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }

}


export const putTestimonioMetodoAnaluz = async ( req : Request, res: Response )=> {

    const { id } = req.params;
    const { body } = req;

    try {
        const {  testimonio} = body;
        const testimonioAnaluzBody ={
            testimonio : testimonio.trim()
        }
        const testimonio_analuz = await TestimonioMetodoanaluz.findByPk( id );

        if (req.usuario?.id != testimonio_analuz?.getDataValue('usuario_id') || req.usuario?.rol != 'ADMIN') {
            res.status(401).json({
                msg: `El id ${req.usuario?.id} no cuenta con los permisos necesarios - no puede hacer esto`
            })
        }


        await testimonio_analuz?.update( testimonioAnaluzBody );
        res.json(testimonio_analuz);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }



}



export const deleteTestimonioMetodoAnaluz = async ( req : Request, res : Response )=>{
    const { id } = req.params;
    try {
        const testimonio_analuz = await  TestimonioMetodoanaluz.findByPk( id );
        
        // if ( !seccion || !seccion.getDataValue('estado') ) {
        //     return  res.status(400).json({
        //         msg: `No existe una sección con el id: ${ id }`
        //     });    
        // }
        

    if (req.usuario?.id != testimonio_analuz?.getDataValue('usuario_id') || req.usuario?.rol != 'ADMIN') {
        res.status(401).json({
            msg: `El id ${req.usuario?.id} no cuenta con los permisos necesarios - no puede hacer esto`
        })
    }
        await testimonio_analuz?.update( { estado : false} )
        return res.json( testimonio_analuz );
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });        
    }
}


