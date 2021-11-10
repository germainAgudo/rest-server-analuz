import { DataTypes } from "sequelize";
import db from "../db/connection";


const Beneficio = db.define('Beneficio',{
    estado : {
        type : DataTypes.BOOLEAN
    },

    img:{
        type:DataTypes.TEXT,
    },

    descripcion:{
        type: DataTypes.STRING,
        allowNull: false,
    }

    ,


}

,{
    freezeTableName: true

    , timestamps: false
}


);

export default Beneficio;

