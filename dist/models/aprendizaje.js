"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const usuario_1 = __importDefault(require("./usuario"));
const Aprendizaje = connection_1.default.define('Aprendizaje', {
    usuario_id: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: 'Usuario',
            key: 'id'
        }
    },
    clase_id: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: 'Clase',
            key: 'id'
        }
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN,
    }
}, {
    freezeTableName: true,
    timestamps: false
});
usuario_1.default.hasMany(Aprendizaje, { foreignKey: "usuario_id" });
Aprendizaje.belongsTo(usuario_1.default, { as: "usuario", foreignKey: "usuario_id" });
// Usuario.hasMany(Aprendizaje,{   as:"usuario_id", foreignKey:"usuario_id"})
// Aprendizaje.belongsTo(Usuario, {as:"usuario", foreignKey:"usuario_id"})
// //uno a muchos, 1 a N
// // se añade una clave userId a la tabla de aprensizaje
// Aprendizaje.belongsTo(Usuario,{as:'usuario_id', foreignKey:"usuario_id"});
// // Usuario va a atener varios aprendizajes
// // se añade una clave  foranea userId a la tabla aprendizaje
// Usuario.hasMany(Aprendizaje,{   foreignKey:"usuario_id"});
exports.default = Aprendizaje;
// // Relacion uno a uno 
// Usuario.hasOne(Aprendizaje,{as: "usuario_id", foreignKey:"usuario_id"})
// Aprendizaje.belongsTo(Usuario,{foreignKey:"usuario_id"})
// Aprendizaje.hasOne(Usuario,{as : "usuario_id", foreignKey:"usuario__id"});
// Usuario.belongsTo(Aprendizaje,{as:"aprendizaje", foreignKey :"usuario_id"})
// Ejemplo de una relacion uno a uno
// un usuario tiene una direccion 
// añadir una clave  foranea userID a la tabla address
// todo:User.hasOne(Address ,{as:"domicilio", foreignKey:"residente_id"})
// añade una clave userId a la tabla addres
// todo: Addres.belognsTo(User, {as:"residente", foreignKey:"residente_id"})
//# sourceMappingURL=aprendizaje.js.map