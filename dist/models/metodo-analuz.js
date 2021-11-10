"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const MetodoAnaluz = connection_1.default.define('MetodoAnaluz', {
    nombre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
    img: {
        type: sequelize_1.DataTypes.TEXT,
    },
    nivel: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    costo: {
        type: sequelize_1.DataTypes.DOUBLE,
        allowNull: false,
    },
}, {
    freezeTableName: true,
    timestamps: false
});
exports.default = MetodoAnaluz;
//# sourceMappingURL=metodo-analuz.js.map