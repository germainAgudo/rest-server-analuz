"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import express from 'express';
const express_1 = __importDefault(require("express"));
const usuarios_1 = __importDefault(require("../routes/usuarios"));
const auth_1 = __importDefault(require("../routes/auth"));
// import seccionRoutes from '../routes/secciones';
const clases_1 = __importDefault(require("../routes/clases"));
const testimonios_1 = __importDefault(require("../routes/testimonios"));
const aprendizajes_1 = __importDefault(require("../routes/aprendizajes"));
const metodo_pago_1 = __importDefault(require("../routes/metodo-pago"));
const uploads_1 = __importDefault(require("../routes/uploads"));
const cors_1 = __importDefault(require("cors"));
const connection_1 = __importDefault(require("../db/connection"));
class Server {
    constructor() {
        this.apiPaths = {
            usuarios: '/api/usuarios',
            login: '/api/auth'
            // secciones : '/api/secciones'
            ,
            clase: '/api/clases',
            testimonios: '/api/testimonios',
            aprendizajes: '/api/aprendizajes',
            metodosPago: '/api/metodos-pago',
            uploads: '/api/uploads'
        };
        {
            this.app = (0, express_1.default)();
            this.port = process.env.PORT || '8000';
            //Metodos iniciales 
            this.dbConnection();
            // Nota: los middlewares tienenq que ir arriba de las rutas
            // llamamos a los mmiddlewares
            this.middlewares();
            // Definir mis rutas
            this.routes();
        }
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                console.log('Database Online');
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    middlewares() {
        // CORS
        this.app.use((0, cors_1.default)());
        // Lectura del body
        this.app.use(express_1.default.json());
        // Carpeta publica 
        this.app.use(express_1.default.static('public'));
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('servidor corriendo en el puerto: ' + this.port);
        });
    }
    routes() {
        this.app.use(this.apiPaths.usuarios, usuarios_1.default);
        this.app.use(this.apiPaths.login, auth_1.default);
        this.app.use(this.apiPaths.clase, clases_1.default);
        // this.app.use( this.apiPaths.secciones,seccionRoutes );   
        this.app.use(this.apiPaths.testimonios, testimonios_1.default);
        this.app.use(this.apiPaths.aprendizajes, aprendizajes_1.default);
        this.app.use(this.apiPaths.metodosPago, metodo_pago_1.default);
        this.app.use(this.apiPaths.uploads, uploads_1.default);
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map