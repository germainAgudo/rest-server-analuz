import path from "path";

// const  { v4 : uuidv4     } = require ("uuid");
import { v4 as uuidv4 } from 'uuid';



export const subirArchivo = ( files : any, extensionesValidas = ['png','jpg','jpeg','gif'], carpeta = '' ) => {

    return new Promise( (resolve, reject) => {///resolve si todo sale bien y reject si sale mal

        //Se extrae el nombre del archivo
        const {  originalname } = files;
        const nombreCortado =  originalname.split('.');
        const extension = nombreCortado[ nombreCortado.length - 1 ];

        // Validar la extension
        if ( !extensionesValidas.includes( extension ) ) {
            return reject(`La extensión ${ extension } no es permitida - ${ extensionesValidas }`);
        }
        
        const nombreTemp = uuidv4() + '.' + extension;
        const uploadPath = path.join( __dirname, '../uploads/', carpeta, nombreTemp );

        originalname.mv(uploadPath, (err : any) => {
            if (err) {
                reject(err);
            }

            resolve( nombreTemp );
        });

    }); 

}



