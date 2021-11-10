import { DataTypes } from "sequelize";
import db from "../db/connection";
import Tratamiento from "./tratamiento";


const GaleriaTratamiento = db.define('GaleriaTratamiento',{
   
    estado : {
        type : DataTypes.BOOLEAN
    },


    tratamiento_id:{
        type: DataTypes.BIGINT,
        allowNull: false,
        references:{
            model: Tratamiento,
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

export default GaleriaTratamiento;

