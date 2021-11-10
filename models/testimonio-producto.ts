import { DataTypes } from "sequelize";
import db from "../db/connection";
import Producto from "./producto";
import Usuario from "./usuario";



const TestimonioProducto = db.define( 'TestimonioProducto', {
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
    
    producto_id : {
           type : DataTypes.BIGINT
        , allowNull: false
        , references:{
            model: Producto
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




export default TestimonioProducto;


 