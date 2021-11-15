// import express from 'express';
import express, {Application} from 'express';
import userRoutes from '../routes/usuarios';
import loginRoutes from '../routes/auth';
// import seccionRoutes from '../routes/secciones';
import claseRouter from '../routes/clases';
import testimonioRoutes from '../routes/testimonios';
import aprendizajeRoutes from "../routes/aprendizajes";
import metodosPagoRoutes from "../routes/metodo-pago";
import uploadsRoutes from "../routes/uploads";
import metodoAnaluzRoutes from "../routes/metodo-analuz";
import galeriaAnaluzRoutes from "../routes/galeria-metodo-analuz"
import mensualidadAnaluzRoutes from "../routes/mensualidad-metodo-analuz";
import tipoTratamientoRoutes from "../routes/tipo-tratamiento";
import tratamientosRoutes from "../routes/tratamiento";
import talleresRoutes from "../routes/talleres";
import galeriaTallerRoutes from "../routes/galeria-taller";


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
    , metodosPago : '/api/metodos-pago'
    , uploads : '/api/uploads'
    , metodosAnaluz : '/api/metodos-analuz'
    , galeriaAnaluz : '/api/galeria-metodo-analuz'
    , mensualidadAnaluz : '/api/mensualidades-metodo-analuz'
    , tipoTratamiento : '/api/tipos-tratamientos'
    , tratamientos : '/api/tratamientos'
    , talleres : '/api/talleres'
    , galeriaTaller : '/api/galeria-talleres'
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
        this.app.use( this.apiPaths.metodosPago, metodosPagoRoutes );
        this.app.use( this.apiPaths.uploads, uploadsRoutes);
        this.app.use( this.apiPaths.metodosAnaluz, metodoAnaluzRoutes);
        this.app.use( this.apiPaths.galeriaAnaluz, galeriaAnaluzRoutes);
        this.app.use( this.apiPaths.mensualidadAnaluz, mensualidadAnaluzRoutes);
        this.app.use( this.apiPaths.tipoTratamiento , tipoTratamientoRoutes );
        this.app.use( this.apiPaths.tratamientos , tratamientosRoutes );
        this.app.use( this.apiPaths.talleres , talleresRoutes );
        this.app.use( this.apiPaths.galeriaTaller , galeriaTallerRoutes );
    }




}


export default Server; 