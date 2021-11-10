
export const coleccionesPermitidas = ( coleccion ='', colecciones : String[] )=>{

const incluida = colecciones.includes( coleccion || '' );

if ( !incluida ) {
    throw new Error(`La colección: '${ coleccion }'  no es permitida,  intente: ' ${ colecciones } ' `);
}

return true;
    // if (  req.body.sexo != 'h' || req.body.sexo != 'm'  ) {
    //     return res.status(500).json({
    //         msg:'El sexo es invalido'
    //     });
    // }
} 


