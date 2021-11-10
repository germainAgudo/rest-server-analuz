import dotenv from 'dotenv';
// Configurar el dontenv
dotenv.config();

import Server from './models/server';


const server = new Server();

server.listen();

