import { DataTypes } from "sequelize";
import db from "../db/connection";


const Producto = db.define('Producto',{
    
    estado : {
        type : DataTypes.BOOLEAN
    },

    cantidad_disponible:{
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    nombre:{
        type: DataTypes.STRING,
        allowNull: false,
    }

    ,descripcion :{
        type:DataTypes.TEXT,
        allowNull: false,

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

export default Producto;




