"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Clase = connection_1.default.define('Clase', {
    nombre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    descripcion: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    precio: {
        type: sequelize_1.DataTypes.DOUBLE,
        allowNull: false,
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
}, {
    freezeTableName: true,
    timestamps: false
});
exports.default = Clase;
//# sourceMappingURL=clase.js.map