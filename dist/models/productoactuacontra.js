"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const actua_contra_1 = __importDefault(require("./actua-contra"));
const producto_1 = __importDefault(require("./producto"));
const ProductoActuacontra = connection_1.default.define('ProductoActuacontra', {
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
    actuacontra_id: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: actua_contra_1.default,
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
exports.default = ProductoActuacontra;
//# sourceMappingURL=productoactuacontra.js.map