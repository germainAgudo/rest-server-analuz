import { DataTypes } from "sequelize";
import db from "../db/connection";
import Clase from "./clase";
import Pago from "./pago";



const PagoClase = db.define( 'PagoClase', {
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

    , timestamps: false





},


);


// Usuario.hasMany(Aprendizaje,{    foreignKey:"usuario_id"})
// Aprendizaje.belongsTo(Usuario, { as:"usuario", foreignKey:"usuario_id"})




export default PagoClase;


 