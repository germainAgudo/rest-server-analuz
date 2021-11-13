import ActuaContra from "../models/actua-contra";
import Aprendizaje from "../models/aprendizaje";
import Beneficio from "../models/beneficio";
import Clase from "../models/clase";
import GaleriaClase from "../models/galeria-clase";
import GaleriaMetodoAnaluz from "../models/galeria-metodo-analuz";
import GaleriaProducto from "../models/galeria-producto";
import GaleriaTaller from "../models/galeria-taller";
import GaleriaTratamiento from "../models/galeria-tratamiento";
import HistorialClinico from "../models/historial-clinico";
import MensualidadMetodoAnaluz from "../models/mensualidad-metodoanaluz";
import MetodoAnaluz from "../models/metodo-analuz";
import MetodoPago from "../models/metodoPago";
import Pago from "../models/pago";
import PagoClase from "../models/pago-clase";
import PagoMetodoanaluz from "../models/pago-metodo-analuz";
import PagoProducto from "../models/pago-producto";
import PagoTaller from "../models/pago-taller";
import PagoTratamiento from "../models/pago-tratamiento";
import Producto from "../models/producto";
import ProductoActuacontra from "../models/productoactuacontra";
import ProductoBeneficio from "../models/productobeneficio";
import Sanacion from "../models/sanacion";
import Seccion from "../models/seccion";
import Taller from "../models/taller";
import Testimonio from "../models/testimonio";
import TestimonioClase from "../models/testimonio-clase";
import TestimonioMetodoanaluz from "../models/testimonio-metodo-analuz";
import TestimonioProducto from "../models/testimonio-producto";
import TestimonioTaller from "../models/testimonio-taller";
import TestimonioTratamiento from "../models/testimonio-tratamiento";
import TipoTratamiento from "../models/tipoTratamiento";
import Tratamiento from "../models/tratamiento";
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


export const existeMetodoPagoPorId = async ( id : any ) => {

    const existe_id = await MetodoPago.findByPk( id );
    if ( !existe_id || !existe_id.getDataValue('estado') ) {
        throw new Error(`El id ${ id } no existe`);
    }
}

export const existeMetodoAnaluzPorId = async ( id : any ) => {

    const existe_id = await MetodoAnaluz.findByPk( id );
    if ( !existe_id || !existe_id.getDataValue('estado') ) {
        throw new Error(`El id ${ id } no existe`);
    }
}

export const existeGaleriaMetodoAnaluzPorId = async ( id : any ) => {

    const existe_id = await GaleriaMetodoAnaluz.findByPk( id );
    if ( !existe_id || !existe_id.getDataValue('estado') ) {
        throw new Error(`El id ${ id } no existe`);
    }
}


export const existeMensualidadMetodoAnaluzPorId = async ( id : any ) => {

    const existe_id = await MensualidadMetodoAnaluz.findByPk( id );
    if ( !existe_id || !existe_id.getDataValue('estado') ) {
        throw new Error(`El id ${ id } no existe`);
    }
}


export const existeTipoTratamientoPorId = async ( id : any ) => {

    const existe_id = await TipoTratamiento.findByPk( id );
    if ( !existe_id || !existe_id.getDataValue('estado') ) {
        throw new Error(`El id ${ id } no existe`);
    }
}

export const existeTratamientoPorId = async ( id : any ) => {

    const existe_id = await Tratamiento.findByPk( id );
    if ( !existe_id || !existe_id.getDataValue('estado') ) {
        throw new Error(`El id ${ id } no existe`);
    }
}


export const existeTallerPorId = async ( id : any ) => {

    const existe_id = await Taller.findByPk( id );
    if ( !existe_id || !existe_id.getDataValue('estado') ) {
        throw new Error(`El id ${ id } no existe`);
    }
}


export const existeGaleriaTallerPorId = async ( id : any ) => {

    const existe_id = await GaleriaTaller.findByPk( id );
    if ( !existe_id || !existe_id.getDataValue('estado') ) {
        throw new Error(`El id ${ id } no existe`);
    }
}



export const existeGaleriaClasePorId = async ( id : any ) => {

    const existe_id = await GaleriaClase.findByPk( id );
    if ( !existe_id || !existe_id.getDataValue('estado') ) {
        throw new Error(`El id ${ id } no existe`);
    }
}


export const existeGaleriaTratamientoPorId = async ( id : any ) => {

    const existe_id = await GaleriaTratamiento.findByPk( id );
    if ( !existe_id || !existe_id.getDataValue('estado') ) {
        throw new Error(`El id ${ id } no existe`);
    }
}




export const existeHistorialClinicoPorId = async ( id : any ) => {

    const existe_id = await HistorialClinico.findByPk( id );
    if ( !existe_id || !existe_id.getDataValue('estado') ) {
        throw new Error(`El id ${ id } no existe`);
    }
}





export const existeSanacionPorId = async ( id : any ) => {

    const existe_id = await Sanacion.findByPk( id );
    if ( !existe_id || !existe_id.getDataValue('estado') ) {
        throw new Error(`El id ${ id } no existe`);
    }
}


export const existeProductoPorId = async ( id : any ) => {

    const existe_id = await Producto.findByPk( id );
    if ( !existe_id || !existe_id.getDataValue('estado') ) {
        throw new Error(`El id ${ id } no existe`);
    }
}


export const existeGaleriaProductoPorId = async ( id : any ) => {

    const existe_id = await GaleriaProducto.findByPk( id );
    if ( !existe_id || !existe_id.getDataValue('estado') ) {
        throw new Error(`El id ${ id } no existe`);
    }
}



export const existeBeneficioPorId = async ( id : any ) => {

    const existe_id = await Beneficio.findByPk( id );
    if ( !existe_id || !existe_id.getDataValue('estado') ) {
        throw new Error(`El id ${ id } no existe`);
    }
}




export const existeActuaContraPorId = async ( id : any ) => {

    const existe_id = await ActuaContra.findByPk( id );
    if ( !existe_id || !existe_id.getDataValue('estado') ) {
        throw new Error(`El id ${ id } no existe`);
    }
}




export const existeProductoBeneficioPorId = async ( id : any ) => {

    const existe_id = await ProductoBeneficio.findByPk( id );
    if ( !existe_id || !existe_id.getDataValue('estado') ) {
        throw new Error(`El id ${ id } no existe`);
    }
}



export const existeProductoActuacontraPorId = async ( id : any ) => {

    const existe_id = await ProductoActuacontra.findByPk( id );
    if ( !existe_id || !existe_id.getDataValue('estado') ) {
        throw new Error(`El id ${ id } no existe`);
    }
}



export const existePagoPorId = async ( id : any ) => {

    const existe_id = await Pago.findByPk( id );
    if ( !existe_id || !existe_id.getDataValue('estado') ) {
        throw new Error(`El id ${ id } no existe`);
    }
}



export const existePagoProductoPorId = async ( id : any ) => {

    const existe_id = await PagoProducto.findByPk( id );
    if ( !existe_id || !existe_id.getDataValue('estado') ) {
        throw new Error(`El id ${ id } no existe`);
    }
}


export const existePagoClasePorId = async ( id : any ) => {

    const existe_id = await PagoClase.findByPk( id );
    if ( !existe_id || !existe_id.getDataValue('estado') ) {
        throw new Error(`El id ${ id } no existe`);
    }
}


export const existePagoMetodoAnaluzPorId = async ( id : any ) => {

    const existe_id = await PagoMetodoanaluz.findByPk( id );
    if ( !existe_id || !existe_id.getDataValue('estado') ) {
        throw new Error(`El id ${ id } no existe`);
    }
}




export const existePagoTallerPorId = async ( id : any ) => {

    const existe_id = await PagoTaller.findByPk( id );
    if ( !existe_id || !existe_id.getDataValue('estado') ) {
        throw new Error(`El id ${ id } no existe`);
    }
}


export const existePagoTratamientoPorId = async ( id : any ) => {

    const existe_id = await PagoTratamiento.findByPk( id );
    if ( !existe_id || !existe_id.getDataValue('estado') ) {
        throw new Error(`El id ${ id } no existe`);
    }
}


export const existeTestimonioClasePorId = async ( id : any ) => {

    const existe_id = await TestimonioClase.findByPk( id );
    if ( !existe_id || !existe_id.getDataValue('estado') ) {
        throw new Error(`El id ${ id } no existe`);
    }
}


export const existetestimonioProductoPorId = async ( id : any ) => {

    const existe_id = await TestimonioProducto.findByPk( id );
    if ( !existe_id || !existe_id.getDataValue('estado') ) {
        throw new Error(`El id ${ id } no existe`);
    }
}


export const existeTestimonioMetodoanaluzPorId = async ( id : any ) => {

    const existe_id = await TestimonioMetodoanaluz.findByPk( id );
    if ( !existe_id || !existe_id.getDataValue('estado') ) {
        throw new Error(`El id ${ id } no existe`);
    }
}





export const existeTestimonioTallerPorId = async ( id : any ) => {

    const existe_id = await TestimonioTaller.findByPk( id );
    if ( !existe_id || !existe_id.getDataValue('estado') ) {
        throw new Error(`El id ${ id } no existe`);
    }
}


export const existeTestimonioTratamientoPorId = async ( id : any ) => {

    const existe_id = await TestimonioTratamiento.findByPk( id );
    if ( !existe_id || !existe_id.getDataValue('estado') ) {
        throw new Error(`El id ${ id } no existe`);
    }
}












/**
 * 
 */


export const existeNombreMetodoPago = async ( nombre : any ) => {

    if (nombre==null) {
        throw new Error(`El nombre está vacio`);
        
    }
    const existe_nombreMetodoPago = await MetodoPago.findOne({
        where:{
           nombre: nombre.trim().toUpperCase(),
           estado:true

        }
    })

    if ( existe_nombreMetodoPago  ) {
        throw new Error(`El nombre ${ nombre } ya está registrado`);
    }
}









/* export const existePorId = async ( id : any ) => {

    const existe_id = await MetodoAnaluz.findByPk( id );
    if ( !existe_id || !existe_id.getDataValue('estado') ) {
        throw new Error(`El id ${ id } no existe`);
    }
}
 */








