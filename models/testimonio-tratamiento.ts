import { DataTypes } from "sequelize";
import db from "../db/connection";
import Tratamiento from "./tratamiento";
import Usuario from "./usuario";



const TestimonioTratamiento = db.define( 'TestimonioTratamiento', {
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

    // , timestamps: false


},


);


// Usuario.hasMany(Aprendizaje,{    foreignKey:"usuario_id"})
// Aprendizaje.belongsTo(Usuario, { as:"usuario", foreignKey:"usuario_id"})




export default TestimonioTratamiento;


 