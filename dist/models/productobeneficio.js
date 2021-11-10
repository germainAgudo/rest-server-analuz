"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const beneficio_1 = __importDefault(require("./beneficio"));
const producto_1 = __importDefault(require("./producto"));
const ProductoBeneficio = connection_1.default.define('ProductoBeneficio', {
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
    beneficio_id: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: beneficio_1.default,
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
exports.default = ProductoBeneficio;
//# sourceMappingURL=productobeneficio.js.map