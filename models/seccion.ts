import { DataTypes } from "sequelize";
import db from "../db/connection";


const Seccion = db.define('Seccion',{

    nombre:{
        type: DataTypes.STRING,
        allowNull: false,
    }

    ,imgurl :{
        type:DataTypes.TEXT,
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



export default Seccion;


