import { Request, Response } from "express";
import Aprendizaje from "../models/aprendizaje";
import Usuario from "../models/usuario";



export const getAprendizajes = async ( req : Request, res : Response)=> {
    const query = { estado : true };

    try {
        const [total, aprendizajes ] = await Promise.all([
            Aprendizaje.findAndCountAll({ where: query }).then(result=>  result.count  )
            // , Aprendizaje.findAll({ where: query})

            // , Aprendizaje.findAll({ 
            //     where: query,

            //    include :{
            //        model : Usuario, 
            //     //    as: 'usuario'
            //     // attributes:['nombre']

            //    },
            
            // //    include :[{
            // //     model : Usuario, 
            // //  //    as: 'usuario'
            // //  attributes:['nombre']

            // // }]
            // })



            ,Aprendizaje.findAll({
                where: query,
                attributes:{
                    exclude: ['usuario_id']
                },
                include:[
                    
                    
                    {
                        model: Usuario,
                        // attributes:[
                           
                        // ]

                        // foreignKey:'usuario_id',
                        as:"usuario",
                        // attributes: ['nombre']
                        attributes:{
                            exclude: ['password']
                        },
                    }
                ]
            })




            // , Seccion.findAll({ where:{ estado: true } })
        ]) 
        res.json({
              total
            , aprendizajes
        })   
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });    
    }
}



export const getAprendizaje = async ( req : Request, res : Response )=>{
    const { id }= req.params;

try {
    const aprendizaje = await Aprendizaje.findByPk( id );
    res.json( aprendizaje );
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}

export const postAprendizaje = async ( req : Request, res : Response )=>{
    const { body } = req;
try {
    const { estado, ... aprendizajeBody } = body;

    const {clase_id} = req.body;
    aprendizajeBody.usuario_id=req.usuario?.id
    const existe = await  Aprendizaje.findOne({
        where:{
            clase_id: clase_id 
            ,usuario_id :req.usuario?.id
            , estado:true

        }
    });

    

    if (existe) {

        return res.status(400).json({
            msg: `El usuario  ${ req.usuario?.id } ya se encuentra inscrito en la clase ${ clase_id }`
        })
    }

    const aprendizaje = Aprendizaje.build( aprendizajeBody );
    await aprendizaje.save();
    res.json({
        aprendizaje
    })    
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}

export const putAprendizaje = async ( req : Request, res : Response )=>{
 const { id } = req.params;
    const { body } = req;
try {
    const { estado, ... aprendizajeBody } = body;
    const aprendizaje = await Aprendizaje.findByPk( id );
    await aprendizaje?.update(aprendizajeBody);
    res.json( aprendizaje )  
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}


export const deleteAprendizaje = async ( req : Request, res : Response )=>{
  const { id } = req.params;
try {
    const aprendizaje = await Aprendizaje.findByPk( id );

    if (req.usuario?.id != aprendizaje?.getDataValue('usuario_id') || req.usuario?.rol != 'ADMIN') {
        res.status(401).json({
            msg: `El id ${req.usuario?.id} no cuenta con los permisos necesarios - no puede hacer esto`
        })
    }

    await aprendizaje?.update( { estado : false } );
    return res.json(aprendizaje);     
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });  
}
}






