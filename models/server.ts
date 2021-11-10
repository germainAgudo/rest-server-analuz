// import express from 'express';
import express, {Application} from 'express';
import userRoutes from '../routes/usuarios';
import loginRoutes from '../routes/auth';
// import seccionRoutes from '../routes/secciones';
import claseRouter from '../routes/clases';
import testimonioRoutes from '../routes/testimonios';
import aprendizajeRoutes from "../routes/aprendizajes";



import cors from 'cors'
import db from '../db/connection';


class Server{
private app : Application;
private port : String; 
private apiPaths  = {
    usuarios : '/api/usuarios',
    login  :'/api/auth' 
    // secciones : '/api/secciones'
    , clase : '/api/clases'
    , testimonios : '/api/testimonios'
    , aprendizajes : '/api/aprendizajes'
}
    constructor(){{ 
        this.app = express();
        this.port = process.env.PORT || '8000';
 
 //Metodos iniciales 

 this.dbConnection();

    // Nota: los middlewares tienenq que ir arriba de las rutas
        // llamamos a los mmiddlewares
        this.middlewares();
        


        // Definir mis rutas
        this.routes();
     

    }}



    async dbConnection(){
        try {
            await db.authenticate();
            console.log('Database Online');
            
        } catch (error:any) {
            throw new Error(error);
            
        }
    }


    middlewares(){
        // CORS
        this.app.use( cors() );

        // Lectura del body
        this.app.use( express.json() );


        // Carpeta publica 
        this.app.use( express.static('public') );
    }

    listen(){   
        this.app.listen( this.port,()=>{
            console.log('servidor corriendo en el puerto: ' + this.port);
            
        }

        )
    }

    routes(){
        this.app.use( this.apiPaths.usuarios, userRoutes);
        this.app.use( this.apiPaths.login, loginRoutes );
        this.app.use( this.apiPaths.clase, claseRouter );
        // this.app.use( this.apiPaths.secciones,seccionRoutes );   
        this.app.use( this.apiPaths.testimonios, testimonioRoutes );
        this.app.use( this.apiPaths.aprendizajes, aprendizajeRoutes );
    }




}


export default Server; 