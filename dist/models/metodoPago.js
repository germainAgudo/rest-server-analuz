"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const MetodoPago = connection_1.default.define('MetodoPago', {
    nombre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
    img: {
        type: sequelize_1.DataTypes.TEXT,
    },
}, {
    freezeTableName: true,
    timestamps: false
});
exports.default = MetodoPago;
//# sourceMappingURL=metodoPago.js.map