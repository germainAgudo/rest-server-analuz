import { DataTypes } from "sequelize";
import db from "../db/connection";
import Pago from "./pago";
import Taller from "./taller";



const PagoTaller = db.define( 'PagoTaller', {
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

    , timestamps: false





},


);


// Usuario.hasMany(Aprendizaje,{    foreignKey:"usuario_id"})
// Aprendizaje.belongsTo(Usuario, { as:"usuario", foreignKey:"usuario_id"})




export default PagoTaller;


 