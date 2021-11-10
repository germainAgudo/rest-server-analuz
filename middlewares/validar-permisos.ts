import { NextFunction, Request, Response } from "express";




export const validarPermisos =(req: Request, res:Response, next: NextFunction)=>{
    // console.log(req.usuario);
    
    if ( req.usuario== null ) {
        return res.status(500).json({
            msg: 'Se requiere verificar el rol sin validar el token '
        })
    }

        const {rol}  = req.usuario;
// console.log(rol);
        
        let permiso = false;
        ((req.usuario.id ==req.params.id || rol == 'ADMIN')) ?permiso = true : permiso = false

        if ( !permiso) {
            res.status(401).json({
                msg: `El id ${req.usuario.id} no cuenta con los permisos necesarios - no puede hacer esto`
            })
        }

    next();
}







