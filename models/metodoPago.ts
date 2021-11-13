import { DataTypes } from "sequelize";
import db from "../db/connection";


const MetodoPago = db.define('MetodoPago',{
    nombre:{
        type: DataTypes.STRING,
        allowNull: false,
    }

    ,estado : {
        type : DataTypes.BOOLEAN
    },

    imgurl:{
        type:DataTypes.TEXT,
    },

}

,{
    freezeTableName: true

    , timestamps: false
}


);

export default MetodoPago;

