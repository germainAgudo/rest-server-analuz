import { DataTypes } from "sequelize";
import db from "../db/connection";


const MetodoAnaluz = db.define('MetodoAnaluz',{
    nombre:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    descripcion:{
        type: DataTypes.STRING,
        allowNull: false,
    }

    ,estado : {
        type : DataTypes.BOOLEAN
    },


    imgurl:{
        type:DataTypes.TEXT,
    },
    nivel:{
        type:DataTypes.INTEGER,
        allowNull: false,

    },
    costo:{
        type:DataTypes.DOUBLE,
        allowNull: false,

    },

}

,{
    freezeTableName: true

    , timestamps: false
}


);

export default MetodoAnaluz;

