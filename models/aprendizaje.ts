import { DataTypes } from "sequelize";
import db from "../db/connection";
import Usuario from "./usuario";
import Clase from "./clase";



const Aprendizaje = db.define( 'Aprendizaje', {
    usuario_id: {
          type : DataTypes.BIGINT
        , allowNull: false
        , references:{
            model: 'Usuario'
            , key: 'id'
        }
        
    }
    , 
    
    clase_id : {
           type : DataTypes.BIGINT
        , allowNull: false
        , references:{
            model: 'Clase'
            , key:'id'
        }

    }
         ,estado : {
        type : DataTypes.BOOLEAN,
        
    }

}

,{
    freezeTableName: true

    , timestamps: false





},


);


Usuario.hasMany(Aprendizaje,{    foreignKey:"usuario_id"})
Aprendizaje.belongsTo(Usuario, { as:"usuario", foreignKey:"usuario_id"})

// Usuario.hasMany(Aprendizaje,{   as:"usuario_id", foreignKey:"usuario_id"})
// Aprendizaje.belongsTo(Usuario, {as:"usuario", foreignKey:"usuario_id"})



// //uno a muchos, 1 a N

// // se añade una clave userId a la tabla de aprensizaje
// Aprendizaje.belongsTo(Usuario,{as:'usuario_id', foreignKey:"usuario_id"});


// // Usuario va a atener varios aprendizajes
// // se añade una clave  foranea userId a la tabla aprendizaje
// Usuario.hasMany(Aprendizaje,{   foreignKey:"usuario_id"});

export default Aprendizaje;


  
// // Relacion uno a uno 
// Usuario.hasOne(Aprendizaje,{as: "usuario_id", foreignKey:"usuario_id"})
// Aprendizaje.belongsTo(Usuario,{foreignKey:"usuario_id"})







// Aprendizaje.hasOne(Usuario,{as : "usuario_id", foreignKey:"usuario__id"});

// Usuario.belongsTo(Aprendizaje,{as:"aprendizaje", foreignKey :"usuario_id"})








// Ejemplo de una relacion uno a uno
// un usuario tiene una direccion 
// añadir una clave  foranea userID a la tabla address

// todo:User.hasOne(Address ,{as:"domicilio", foreignKey:"residente_id"})

// añade una clave userId a la tabla addres
// todo: Addres.belognsTo(User, {as:"residente", foreignKey:"residente_id"})

