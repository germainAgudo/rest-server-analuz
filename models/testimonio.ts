import { DataTypes } from "sequelize";
import db from "../db/connection";
import Seccion from "./seccion";
import Usuario from "./usuario";


const Testimonio = db.define('Testimonio',{

    testimonio :{
          type:DataTypes.TEXT
        , allowNull: false,

    }
    ,estado : {
        type : DataTypes.BOOLEAN,
        
    }
    , usuario_id: {
          type : DataTypes.BIGINT
        , allowNull: false
        , references:{
            model: Usuario
        }
        
    }
    , seccion_id:{
         type : DataTypes.BIGINT
        , allowNull: false
        , references:{
            model: Seccion
        }

    }



}

,{
    freezeTableName: true

}


)


export default Testimonio;



