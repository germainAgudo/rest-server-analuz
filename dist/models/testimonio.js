"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const seccion_1 = __importDefault(require("./seccion"));
const usuario_1 = __importDefault(require("./usuario"));
const Testimonio = connection_1.default.define('Testimonio', {
    testimonio: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
    usuario_id: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: usuario_1.default
        }
    },
    seccion_id: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: seccion_1.default
        }
    }
}, {
    freezeTableName: true
});
exports.default = Testimonio;
//# sourceMappingURL=testimonio.js.map