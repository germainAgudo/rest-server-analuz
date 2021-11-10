import { DataTypes } from "sequelize";
import db from "../db/connection";
import Tratamiento from "./tratamiento";
import Usuario from "./usuario";



const HistorialClinico = db.define( 'HistorialClinico', {
    estado : {
        type : DataTypes.BOOLEAN,
        
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
    
    tratamiento_id : {
           type : DataTypes.BIGINT
        , allowNull: false
        , references:{
            model: Tratamiento
            , key:'id'
        }

    }


}

,{
    freezeTableName: true

    , timestamps: false





},


);


// Usuario.hasMany(Aprendizaje,{    foreignKey:"usuario_id"})
// Aprendizaje.belongsTo(Usuario, { as:"usuario", foreignKey:"usuario_id"})




export default HistorialClinico;


 