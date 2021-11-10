import { DataTypes } from "sequelize";
import db from "../db/connection";


const Usuario = db.define('Usuario',{
    // id:{
    //     type: DataTypes.INTEGER,
    //     primaryKey: true,
    //     autoIncrement: true,
    //     allowNull: false
    
    // }, 
    nombre: {
        type: DataTypes.STRING
    },

    estado : {
        type : DataTypes.BOOLEAN
    },

    correo : {
        type: DataTypes.STRING,
        allowNull: false,
    },

    password : {
        type: DataTypes.STRING,
        allowNull: false,
    },

    numero_telefonico:{
        type: DataTypes.STRING,
        allowNull: false
    },

    fecha_nacimiento:{
        type:DataTypes.DATE, 
        allowNull:false
    },

    sexo:{
        type: DataTypes.ENUM('h', 'm'),
        allowNull: false
    },

    img:{
        type:DataTypes.TEXT,

    },



    rol : {
        type: DataTypes.STRING,
        // allowNull: false,
    },


}

,{
    freezeTableName: true
}

);


Usuario.prototype.toJSON = function () {
    var values = Object.assign({},this.get());
    delete values.password;
    return values;
}


export default Usuario;

