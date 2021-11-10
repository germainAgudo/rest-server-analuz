import { DataTypes } from "sequelize";
import db from "../db/connection";
import MetodoPago from "./metodoPago";
import Usuario from "./usuario";



const Pago = db.define( 'Pago', {
    estado : {
        type : DataTypes.BOOLEAN,
        
    },
    total_texto:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    total :{
        type : DataTypes.DOUBLE
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
    
    metodopago_id : {
           type : DataTypes.BIGINT
        , allowNull: false
        , references:{
            model: MetodoPago
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




export default Pago;


 