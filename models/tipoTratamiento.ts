import { DataTypes } from "sequelize";
import db from "../db/connection";


const TipoTratamiento = db.define('TipoTratamiento',{
    estado : {
        type : DataTypes.BOOLEAN
    },
  
    nombre:{
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

export default TipoTratamiento;

