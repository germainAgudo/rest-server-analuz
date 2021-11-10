"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const metodoPago_1 = __importDefault(require("./metodoPago"));
const usuario_1 = __importDefault(require("./usuario"));
const Pago = connection_1.default.define('Pago', {
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
    total_texto: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    total: {
        type: sequelize_1.DataTypes.DOUBLE
    },
    usuario_id: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: usuario_1.default,
            key: 'id'
        }
    },
    metodopago_id: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: metodoPago_1.default,
            key: 'id'
        }
    }
}, {
    freezeTableName: true
    // , timestamps: false
});
// Usuario.hasMany(Aprendizaje,{    foreignKey:"usuario_id"})
// Aprendizaje.belongsTo(Usuario, { as:"usuario", foreignKey:"usuario_id"})
exports.default = Pago;
//# sourceMappingURL=pago.js.map