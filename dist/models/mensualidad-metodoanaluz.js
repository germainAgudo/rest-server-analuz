"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const metodo_analuz_1 = __importDefault(require("./metodo-analuz"));
const usuario_1 = __importDefault(require("./usuario"));
const MensualidadMetodoAnaluz = connection_1.default.define('MensualidadMetodoAnaluz', {
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
    dias_restantes: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    estado_mensualidad: {
        type: sequelize_1.DataTypes.ENUM('vigente', 'expirado'),
        // allowNull: false
    },
    metodoanaluz_id: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: metodo_analuz_1.default,
            key: 'id'
        }
    },
    usuario_id: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: usuario_1.default,
            key: 'id'
        }
    },
}, {
    freezeTableName: true,
    timestamps: false
});
// Usuario.hasMany(Aprendizaje,{    foreignKey:"usuario_id"})
// Aprendizaje.belongsTo(Usuario, { as:"usuario", foreignKey:"usuario_id"})
exports.default = MensualidadMetodoAnaluz;
//# sourceMappingURL=mensualidad-metodoanaluz.js.map