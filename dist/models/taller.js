"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Taller = connection_1.default.define('Taller', {
    nombre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    descripcion: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
    precio: {
        type: sequelize_1.DataTypes.DOUBLE,
        allowNull: false,
    }
}, {
    freezeTableName: true,
    timestamps: false
});
exports.default = Taller;
//# sourceMappingURL=taller.js.map