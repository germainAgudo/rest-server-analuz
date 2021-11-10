import { NextFunction, Request, Response } from "express";


export const esAdminRole = (req : Request , res : Response, next: NextFunction  )=>{

    if ( ! req.usuario) {
        return res.status(500).json({
            msg:'Se requiere verificar el rol sin validar el token primero '
        });
    }
    
    const {rol , id}= req.usuario;
    if (rol != 'ADMIN') {
        return res.status(401).json({
            msg: `El Usuario ${ id} no cuenta con los privilegios -  no puede hacer esto`
        })
    }
    
next();
}


