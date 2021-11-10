import {Response , Request, NextFunction  } from "express";

import jwt  from "jsonwebtoken";
import Usuario from "../models/usuario";




export const validarJWT = async( req: Request, res: Response, next: NextFunction)=>{
    const token = req.header('analuz-token');
    if ( !token  ) {
        return res.status(401).json({
            msg:'No hay token de acceso para la solicitud'
        })
        
    }

    try {
        type MyToken = {
            id: string
            iat: number
            exp: number
          }
        
        const secretKey: any = process.env.SECRETPRIVATEKEY || '53cr3tK3Y@n4LuzRu1zZ';
        const  decodedToken   = jwt.verify(token, secretKey ) as MyToken;
        const id   =  decodedToken.id ;
        // console.log(id);
        
        // Leer el usuario que corresponde al id
        const usuario = await Usuario.findByPk(id);
          
        if ( !usuario ) {
            return res.status(401).json({
                msg:'Token no válido - usuario no existe en la DB'
            })
        }

    
        // Veificar si el id tiene el estao true
        if ( !usuario.getDataValue('estado') ) {
            return res.status(401).json(
                {
                    msg : 'Token no válido - usuario con estado false'
                }
            )
            
        } 



        // console.log(id);


req.usuario= usuario;
// console.log(req.usuario);

        

        next();
        
    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg:'Token no válido'
        })
        
    }


} 





