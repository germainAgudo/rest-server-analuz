"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Usuario = connection_1.default.define('Usuario', {
    // id:{
    //     type: DataTypes.INTEGER,
    //     primaryKey: true,
    //     autoIncrement: true,
    //     allowNull: false
    // }, 
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
    correo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    numero_telefonico: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    fecha_nacimiento: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    sexo: {
        type: sequelize_1.DataTypes.ENUM('h', 'm'),
        allowNull: false
    },
    img: {
        type: sequelize_1.DataTypes.TEXT,
    },
    rol: {
        type: sequelize_1.DataTypes.STRING,
        // allowNull: false,
    },
}, {
    freezeTableName: true
});
Usuario.prototype.toJSON = function () {
    var values = Object.assign({}, this.get());
    delete values.password;
    return values;
};
exports.default = Usuario;
//# sourceMappingURL=usuario.js.map