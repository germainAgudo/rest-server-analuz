import { DataTypes } from "sequelize";
import db from "../db/connection";


const Clase = db.define('Clase',{
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

export default Clase;




