"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Seccion = connection_1.default.define('Seccion', {
    nombre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    imgurl: {
        type: sequelize_1.DataTypes.TEXT,
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
}, {
    freezeTableName: true,
    timestamps: false
});
exports.default = Seccion;
//# sourceMappingURL=seccion.js.map