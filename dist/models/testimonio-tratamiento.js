"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const tratamiento_1 = __importDefault(require("./tratamiento"));
const usuario_1 = __importDefault(require("./usuario"));
const TestimonioTratamiento = connection_1.default.define('TestimonioTratamiento', {
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
    testimonio: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    usuario_id: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: usuario_1.default,
            key: 'id'
        }
    },
    tratamiento_id: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: tratamiento_1.default,
            key: 'id'
        }
    }
}, {
    freezeTableName: true
    // , timestamps: false
});
// Usuario.hasMany(Aprendizaje,{    foreignKey:"usuario_id"})
// Aprendizaje.belongsTo(Usuario, { as:"usuario", foreignKey:"usuario_id"})
exports.default = TestimonioTratamiento;
//# sourceMappingURL=testimonio-tratamiento.js.map