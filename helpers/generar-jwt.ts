import jwt from "jsonwebtoken";

export const generarJWT = ( id = '')=>{

        return new Promise( (resolve , reject)=>{

            const payload = {id};
            jwt.sign(payload, process.env.SECRETPRIVATEKEY || '',{
                expiresIn:'3d'
            }, ( err, token )=>{
                if ( err ) {
                    console.log(err);
                    reject( 'No se puede generer el token' );
                    
                } else {
                    resolve(token);
                }
            }
            )
        } );
}


