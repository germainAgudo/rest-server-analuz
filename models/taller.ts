import { DataTypes } from "sequelize";
import db from "../db/connection";


const Taller = db.define('Taller',{
    nombre:{
        type: DataTypes.STRING,
        allowNull: false,
    }

    ,descripcion :{
        type:DataTypes.TEXT,
        allowNull: false,

    }

    ,estado : {
        type : DataTypes.BOOLEAN
    },

}

,{
    freezeTableName: true

    , timestamps: false
}


);

export default Taller;




