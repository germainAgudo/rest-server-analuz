"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const tipoTratamiento_1 = __importDefault(require("./tipoTratamiento"));
const Tratamiento = connection_1.default.define('Tratamiento', {
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
    tipotratamiento_id: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: tipoTratamiento_1.default,
            key: 'id'
        }
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    }
}, {
    freezeTableName: true,
    timestamps: false
});
// Usuario.hasMany(Aprendizaje,{    foreignKey:"usuario_id"})
// Aprendizaje.belongsTo(Usuario, { as:"usuario", foreignKey:"usuario_id"})
exports.default = Tratamiento;
//# sourceMappingURL=tratamiento.js.map