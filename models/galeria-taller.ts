import { DataTypes } from "sequelize";
import db from "../db/connection";
import Taller from "./taller";


const GaleriaTaller = db.define('GaleriaTaller',{
   
    estado : {
        type : DataTypes.BOOLEAN
    },


    taller_id:{
        type: DataTypes.BIGINT,
        allowNull: false,
        references:{
            model: Taller,
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

export default GaleriaTaller;

