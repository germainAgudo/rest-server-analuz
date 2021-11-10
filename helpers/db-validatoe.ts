import Aprendizaje from "../models/aprendizaje";
import Clase from "../models/clase";
import Seccion from "../models/seccion";
import Testimonio from "../models/testimonio";
import Usuario from "../models/usuario"

export const existeUsuarioPorId = async ( id : any ) => {

    const existeUsuario  = await Usuario.findByPk( id );
    if (!existeUsuario) {
        throw new Error(`El id ${ id } no existe`);
        
    }
}


export const existeSeccionPorId = async ( id : any ) => {

    const existeSeccion = await Seccion.findByPk( id );
    if ( !existeSeccion || !existeSeccion.getDataValue('estado') ) {
        throw new Error(`El id ${ id } no existe`);
    }
}


export const existeTestimonioPorId = async ( id : any ) => {

    const existeTestimonio = await Testimonio.findByPk( id );
    if ( !existeTestimonio || !existeTestimonio.getDataValue('estado') ) {
        throw new Error(`El id ${ id } no existe`);
    }
}


export const existeClasePorId = async ( id : any ) => {

    const existeClase = await Clase.findByPk( id );
    if ( !existeClase || !existeClase.getDataValue('estado') ) {
        throw new Error(`El id ${ id } no existe`);
    }
}



export const existeAprendizajePorId = async ( id : any ) => {

    const existeAprendizaje = await Aprendizaje.findByPk( id );
    if ( !existeAprendizaje || !existeAprendizaje.getDataValue('estado') ) {
        throw new Error(`El id ${ id } no existe`);
    }
}


