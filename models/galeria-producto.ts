import { DataTypes } from "sequelize";
import db from "../db/connection";
import Producto from "./producto";


const GaleriaProducto = db.define('GaleriaProducto',{
   
    estado : {
        type : DataTypes.BOOLEAN
    },


    prodcuto_id:{
        type: DataTypes.BIGINT,
        allowNull: false,
        references:{
            model: Producto,
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

export default GaleriaProducto;

