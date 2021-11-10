import { DataTypes } from "sequelize";
import db from "../db/connection";
import MetodoAnaluz from "./metodo-analuz";
import Usuario from "./usuario";



const TestimonioMetodoanaluz = db.define( 'TestimonioMetodoanaluz', {
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
    
    metodoanaluz_id : {
           type : DataTypes.BIGINT
        , allowNull: false
        , references:{
            model: MetodoAnaluz
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




export default TestimonioMetodoanaluz;


 