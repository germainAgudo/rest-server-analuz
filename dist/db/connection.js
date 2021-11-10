"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database = process.env.DB_NAME || 'database';
const username = process.env.DB_USERNAME || 'usuario';
const password = process.env.DB_PASSWORD || '';
const host = process.env.DB_HOST || 'localhost';
const dialect = process.env.DIALECT || 'mysql';
const db = new sequelize_1.Sequelize(database, username, password, {
    host: host,
    dialect: dialect,
    // logging:false
});
// const db = new Sequelize('node', 'root', '',{
//     host:'localhost',
//     dialect: 'mysql',
//     // logging:false
// });
exports.default = db;
//# sourceMappingURL=connection.js.map