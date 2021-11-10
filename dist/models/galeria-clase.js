"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const clase_1 = __importDefault(require("./clase"));
const GaleriaClase = connection_1.default.define('GaleriaClase', {
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
    clase_id: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: clase_1.default,
            key: 'id'
        }
    },
    img: {
        type: sequelize_1.DataTypes.TEXT,
        // allowNull: false,
    },
}, {
    freezeTableName: true,
    timestamps: false
});
// Usuario.hasMany(Aprendizaje,{    foreignKey:"usuario_id"})
// Aprendizaje.belongsTo(Usuario, { as:"usuario", foreignKey:"usuario_id"})
exports.default = GaleriaClase;
//# sourceMappingURL=galeria-clase.js.map