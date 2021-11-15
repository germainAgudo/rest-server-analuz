import { DataTypes } from "sequelize";
import db from "../db/connection";
import MetodoAnaluz from "./metodo-analuz";


const GaleriaMetodoAnaluz = db.define('GaleriaMetodoAnaluz',{
   
    estado : {
        type : DataTypes.BOOLEAN
    },


    metodoanaluz_id:{
        type: DataTypes.BIGINT,
        allowNull: false,
        references:{
            model: MetodoAnaluz,
            key:'id'
        }
    },

    videourl:{
        type: DataTypes.TEXT,
        // allowNull: false,
    },



   

}

,{
    freezeTableName: true

    , timestamps: false
}


);

// Usuario.hasMany(Aprendizaje,{    foreignKey:"usuario_id"})
// Aprendizaje.belongsTo(Usuario, { as:"usuario", foreignKey:"usuario_id"})

export default GaleriaMetodoAnaluz;

