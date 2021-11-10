import { Sequelize } from "sequelize";

const database: string = process.env.DB_NAME ||'database'; 
const username: string = process.env.DB_USERNAME || 'usuario'; 
const password: string = process.env.DB_PASSWORD || '';
const host: string = process.env.DB_HOST || 'localhost';
const dialect: any = process.env.DIALECT || 'mysql';


const db = new Sequelize(database , username, password,{
    host:host,
    dialect: dialect,
    
    // logging:false

});

// const db = new Sequelize('node', 'root', '',{
//     host:'localhost',
//     dialect: 'mysql',
//     // logging:false

// });

export default db;

