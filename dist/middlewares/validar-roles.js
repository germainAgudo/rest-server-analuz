"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.esAdminRole = void 0;
const esAdminRole = (req, res, next) => {
    if (!req.usuario) {
        return res.status(500).json({
            msg: 'Se requiere verificar el rol sin validar el token primero '
        });
    }
    const { rol, id } = req.usuario;
    if (rol != 'ADMIN') {
        return res.status(401).json({
            msg: `El Usuario ${id} no cuenta con los privilegios -  no puede hacer esto`
        });
    }
    next();
};
exports.esAdminRole = esAdminRole;
//# sourceMappingURL=validar-roles.js.map