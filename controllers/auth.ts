import { Request, Response } from "express";
import bcryptjs  from "bcryptjs"
import Usuario from "../models/usuario";
import { generarJWT } from "../helpers/generar-jwt";



export const login= async(req: Request, res: Response)=>{
    const {correo , password}  = req.body;

    try {
        // Verificar si el email existe
        const usuario = await Usuario.findOne({where:{ correo:correo}});
        // console.log(usuario);
        
        if ( !usuario ) {
            return res.status(400).json({
                msg: 'Las credenciales no son corrctas - correo'
            });
        }

        // Si el usuario esta activo
if ( !usuario.getDataValue('estado')   ) {
    return res.status(400).json({
        msg:'Las credenciales no son corrctas - estado:false'
    })
}


        // Verificar la contraseña
        const validarPassword = bcryptjs.compareSync( password, usuario.getDataValue('password'));
        if ( !validarPassword) {
            return res.status( 400 ).json({
                msg: 'Las credenciles no son correctas - password'
            })
            
        }


        // Generar el JWT
        const token = await generarJWT(usuario.getDataValue('id'));
        res.json({
            usuario,
            token
        })



    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:'Hable con el administrador'
        })
        

        
    }

}





