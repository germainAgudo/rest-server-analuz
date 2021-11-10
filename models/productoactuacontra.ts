import { DataTypes } from "sequelize";
import db from "../db/connection";
import ActuaContra from "./actua-contra";
import Producto from "./producto";



const ProductoActuacontra = db.define( 'ProductoActuacontra', {
    estado : {
        type : DataTypes.BOOLEAN,
        
    },
    
    actuacontra_id: {
          type : DataTypes.BIGINT
        , allowNull: false
        , references:{
            model: ActuaContra
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

    , timestamps: false





},


);


// Usuario.hasMany(Aprendizaje,{    foreignKey:"usuario_id"})
// Aprendizaje.belongsTo(Usuario, { as:"usuario", foreignKey:"usuario_id"})




export default ProductoActuacontra;


 