"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const pago_1 = __importDefault(require("./pago"));
const producto_1 = __importDefault(require("./producto"));
const PagoProducto = connection_1.default.define('PagoProducto', {
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
    subtotal_texto: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    subtotal: {
        type: sequelize_1.DataTypes.DOUBLE
    },
    pago_id: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: pago_1.default,
            key: 'id'
        }
    },
    producto_id: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: producto_1.default,
            key: 'id'
        }
    }
}, {
    freezeTableName: true,
    timestamps: false
});
// Usuario.hasMany(Aprendizaje,{    foreignKey:"usuario_id"})
// Aprendizaje.belongsTo(Usuario, { as:"usuario", foreignKey:"usuario_id"})
exports.default = PagoProducto;
//# sourceMappingURL=pago-producto.js.map