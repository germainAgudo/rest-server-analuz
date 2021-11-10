"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMetodoPago = exports.putMetodoPago = exports.postMetodoPago = exports.getMetodoPago = exports.getMetodosPagos = void 0;
const metodoPago_1 = __importDefault(require("../models/metodoPago"));
const getMetodosPagos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { estado: true };
    try {
        const [total, metodos_pagos] = yield Promise.all([
            metodoPago_1.default.findAndCountAll({ where: query }).then(result => result.count),
            metodoPago_1.default.findAll({ where: query })
            // , Seccion.findAll({ where:{ estado: true } })
        ]);
        res.json({
            total,
            metodos_pagos
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.getMetodosPagos = getMetodosPagos;
const getMetodoPago = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const metodo_pago = yield metodoPago_1.default.findByPk(id);
        res.json(metodo_pago);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.getMetodoPago = getMetodoPago;
const postMetodoPago = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const { nombre } = body;
        const data = {
            nombre: nombre.trim().ToUpperCase(),
        };
        const metodo_pago = metodoPago_1.default.build(data);
        yield metodo_pago.save();
        res.json(metodo_pago);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postMetodoPago = postMetodoPago;
const putMetodoPago = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const { nombre } = body;
        const data = {
            nombre: nombre.trim().ToUpperCase(),
        };
        const metodoPago = yield metodoPago_1.default.findByPk(id);
        yield (metodoPago === null || metodoPago === void 0 ? void 0 : metodoPago.update(data));
        res.json(metodoPago);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putMetodoPago = putMetodoPago;
const deleteMetodoPago = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const metodoPago = yield metodoPago_1.default.findByPk(id);
        yield (metodoPago === null || metodoPago === void 0 ? void 0 : metodoPago.update({ estado: false }));
        return res.json(metodoPago);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.deleteMetodoPago = deleteMetodoPago;
//# sourceMappingURL=metodo-pago.js.map