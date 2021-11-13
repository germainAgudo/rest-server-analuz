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


    precio:{
        type:DataTypes.DOUBLE,
        allowNull: false,

    }


}

,{
    freezeTableName: true

    , timestamps: false
}


);

export default Taller;




