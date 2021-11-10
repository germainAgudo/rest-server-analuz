import { DataTypes } from "sequelize";
import db from "../db/connection";
import Pago from "./pago";
import Producto from "./producto";



const PagoProducto = db.define( 'PagoProducto', {
    estado : {
        type : DataTypes.BOOLEAN,
        
    },
    

    subtotal_texto:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    subtotal :{
        type : DataTypes.DOUBLE
    },

    pago_id: {
          type : DataTypes.BIGINT
        , allowNull: false
        , references:{
            model: Pago
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




export default PagoProducto;


 