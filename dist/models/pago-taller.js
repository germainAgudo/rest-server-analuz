"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const pago_1 = __importDefault(require("./pago"));
const taller_1 = __importDefault(require("./taller"));
const PagoTaller = connection_1.default.define('PagoTaller', {
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
    taller_id: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: taller_1.default,
            key: 'id'
        }
    }
}, {
    freezeTableName: true,
    timestamps: false
});
// Usuario.hasMany(Aprendizaje,{    foreignKey:"usuario_id"})
// Aprendizaje.belongsTo(Usuario, { as:"usuario", foreignKey:"usuario_id"})
exports.default = PagoTaller;
//# sourceMappingURL=pago-taller.js.map