import { DataTypes } from "sequelize";
import db from "../db/connection";
import TipoTratamiento from "./tipoTratamiento";


const Tratamiento = db.define('Tratamiento',{
   
    estado : {
        type : DataTypes.BOOLEAN
    },


    tipotratamiento_id :{
        type: DataTypes.BIGINT,
        allowNull: false,
        references:{
            model: TipoTratamiento,
            key:'id'
        }
    },

 

    descripcion:{
        type: DataTypes.STRING,
        allowNull: false,
    }

   

}

,{
    freezeTableName: true

    , timestamps: false
}


);

// Usuario.hasMany(Aprendizaje,{    foreignKey:"usuario_id"})
// Aprendizaje.belongsTo(Usuario, { as:"usuario", foreignKey:"usuario_id"})

export default Tratamiento;

