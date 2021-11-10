import { Request, Response } from "express";
import bcryptjs from "bcryptjs";
import  Usuario from '../models/usuario';
import { generarJWT } from "../helpers/generar-jwt";



export const getUsuarios = async (req : Request, res: Response)=>{
// const usuarios  = await Usuario.findAll();
const query = { estado : true };
try {
const [total, usuarios ] = await Promise.all([
    Usuario.findAndCountAll({ where: query }).then(result=>  result.count  )
  , Usuario.findAll({ where:query })
  // , Usuario.findAll({ where:{ estado: true } })
])   
res.json({
    total
    ,usuarios    
});
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    }); 
}

}




export const getUsuario = async (req : Request, res: Response)=>{
    const {id}  = req.params;

    const usuario  = await Usuario.findByPk( id );
    res.json(usuario);

    // if (usuario) {
    //     res.json(usuario);
    // } else {
    //     res.status(400).json({
    //         msg: `No existe un usuario con el id: ${ id }`
    //     });        
    // }



}


export const postUsuario =  async   (req : Request, res: Response)=>{
    const { body } = req ;
    try {
        const existeEmail = await Usuario.findOne({
            where:{
                correo: body.correo
            }
        })
        if(existeEmail){
            return res.status(400).json({
                msg: 'Ya existe un usuario con el correo electronico ' + body.correo
            })
        }


        const {estado,... nuevoUsuario} = body;
        const usuario = Usuario.build(nuevoUsuario);
        const salt = bcryptjs.genSaltSync();
        usuario.setDataValue('password', bcryptjs.hashSync( nuevoUsuario.password, salt ) )  ;
        


        // const usuario = Usuario.build(body);
        // const salt = bcryptjs.genSaltSync();
        // usuario.setDataValue('password', bcryptjs.hashSync( body.password, salt ) )  ;
    

        await usuario.save();
        const token = await generarJWT( usuario.getDataValue('id'))
        res.json({
            usuario,
            token,
        });
    } catch (error) {
       console.log(error);
       res.status(500).json({
           msg: 'Hable con el administrador'
       });
       
    }
}

export const putUsuario = async (req : Request, res: Response)=>{
    const {id}= req.params;
    const { body } = req ;
    
   try {

    // const usuario = await  Usuario.findByPk( id );
    //    if ( !usuario ) {
    //        return res.status(404).json({
    //            msg: 'No existe un usuario con el id: '+ id
    //        })
    //    }


    const {estado,... nuevoUsuario} = body;
    const usuario = await  Usuario.findByPk( id );


if (body.password) {
    // console.log('si hay');
        const salt = bcryptjs.genSaltSync();
        nuevoUsuario.password = bcryptjs.hashSync( nuevoUsuario.password, salt )
    
}



  

       await usuario?.update( nuevoUsuario );
       res.json( usuario );

   } catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    });
   }
}

export const deleteUsuario =async (req : Request, res: Response)=>{
    const {id}= req.params;

    const usuario  = await Usuario.findByPk( id );

    if (!usuario) {
        
       return  res.status(400).json({
            msg: `No existe un usuario con el id: ${ id }`
        });        
    }
    // await usuario.destroy();
await usuario.update({ estado:false})

    res.json(usuario);

}