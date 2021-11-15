import { DataTypes } from "sequelize";
import db from "../db/connection";
import MetodoAnaluz from "./metodo-analuz";
import Usuario from "./usuario";


const MensualidadMetodoAnaluz = db.define('MensualidadMetodoAnaluz',{
   
    estado : {
        type : DataTypes.BOOLEAN
    },

    fecha_pago : {
        type : DataTypes.DATE
    },

    dias_restantes :{
        type: DataTypes.FLOAT,
        allowNull: false,

    },

    estado_mensualidad:{
        type: DataTypes.ENUM('vigente', 'expirado'),
        // allowNull: false
    },

    metodoanaluz_id:{
        type: DataTypes.BIGINT,
        allowNull: false,
        references:{
            model: MetodoAnaluz,
            key:'id'
        }
    },

    usuario_id:{
        type: DataTypes.BIGINT,
        allowNull: false,
        references:{
            model: Usuario,
            key:'id'
        }
    },




   

}

,{
    freezeTableName: true

    , timestamps: false
}


);

// Usuario.hasMany(Aprendizaje,{    foreignKey:"usuario_id"})
// Aprendizaje.belongsTo(Usuario, { as:"usuario", foreignKey:"usuario_id"})

export default MensualidadMetodoAnaluz;

