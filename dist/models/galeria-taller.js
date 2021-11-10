"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const taller_1 = __importDefault(require("./taller"));
const GaleriaTaller = connection_1.default.define('GaleriaTaller', {
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
    taller_id: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: taller_1.default,
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
exports.default = GaleriaTaller;
//# sourceMappingURL=galeria-taller.js.map