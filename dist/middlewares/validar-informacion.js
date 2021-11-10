"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.coleccionesPermitidas = void 0;
const coleccionesPermitidas = (coleccion = '', colecciones) => {
    const incluida = colecciones.includes(coleccion || '');
    if (!incluida) {
        throw new Error(`La colección: '${coleccion}'  no es permitida,  intente: ' ${colecciones} ' `);
    }
    return true;
    // if (  req.body.sexo != 'h' || req.body.sexo != 'm'  ) {
    //     return res.status(500).json({
    //         msg:'El sexo es invalido'
    //     });
    // }
};
exports.coleccionesPermitidas = coleccionesPermitidas;
//# sourceMappingURL=validar-informacion.js.map