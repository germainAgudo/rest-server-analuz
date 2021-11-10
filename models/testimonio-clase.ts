import { DataTypes } from "sequelize";
import db from "../db/connection";
import Clase from "./clase";

import Usuario from "./usuario";



const TestimonioClase = db.define( 'TestimonioClase', {
    estado : {
        type : DataTypes.BOOLEAN,
        
    },
    testimonio:{
        type: DataTypes.TEXT,
        allowNull: false,
    },

    usuario_id: {
          type : DataTypes.BIGINT
        , allowNull: false
        , references:{
            model: Usuario
            , key: 'id'
        }
        
    }
    , 
    
    clase_id : {
           type : DataTypes.BIGINT
        , allowNull: false
        , references:{
            model: Clase
            , key:'id'
        }

    }


}

,{
    freezeTableName: true

    // , timestamps: false


},


);


// Usuario.hasMany(Aprendizaje,{    foreignKey:"usuario_id"})
// Aprendizaje.belongsTo(Usuario, { as:"usuario", foreignKey:"usuario_id"})




export default TestimonioClase;


 