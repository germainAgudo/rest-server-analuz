import { DataTypes } from "sequelize";
import db from "../db/connection";
import Beneficio from "./beneficio";
import Producto from "./producto";




const ProductoBeneficio = db.define( 'ProductoBeneficio', {
    estado : {
        type : DataTypes.BOOLEAN,
        
    },
    
    beneficio_id: {
          type : DataTypes.BIGINT
        , allowNull: false
        , references:{
            model: Beneficio
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




export default ProductoBeneficio;


 