import { DataTypes } from "sequelize";
import db from "../db/connection";
import Clase from "./clase";


const GaleriaClase = db.define('GaleriaClase',{
   
    estado : {
        type : DataTypes.BOOLEAN
    },


    clase_id:{
        type: DataTypes.BIGINT,
        allowNull: false,
        references:{
            model: Clase,
            key:'id'
        }
    },

    img:{
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

export default GaleriaClase;

