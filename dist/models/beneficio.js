"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Beneficio = connection_1.default.define('Beneficio', {
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
    img: {
        type: sequelize_1.DataTypes.TEXT,
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    freezeTableName: true,
    timestamps: false
});
exports.default = Beneficio;
//# sourceMappingURL=beneficio.js.map