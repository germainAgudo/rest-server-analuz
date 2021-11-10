import { DataTypes } from "sequelize";
import db from "../db/connection";
import Taller from "./taller";
import Usuario from "./usuario";



const TestimonioTaller = db.define( 'TestimonioTaller', {
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
    
    taller_id : {
           type : DataTypes.BIGINT
        , allowNull: false
        , references:{
            model: Taller
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




export default TestimonioTaller;


 