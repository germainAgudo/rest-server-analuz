"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Producto = connection_1.default.define('Producto', {
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
    cantidad_disponible: {
        type: sequelize_1.DataTypes.DOUBLE,
        allowNull: false
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    descripcion: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
}, {
    freezeTableName: true,
    timestamps: false
});
exports.default = Producto;
//# sourceMappingURL=producto.js.map