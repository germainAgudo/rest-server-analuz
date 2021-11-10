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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMetodoAnaluz = exports.putMetodoAnaluz = exports.postMetodoAnaluz = exports.getMetodoAnaluz = exports.getMetodosAnaluz = void 0;
const metodo_analuz_1 = __importDefault(require("../models/metodo-analuz"));
const getMetodosAnaluz = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { estado: true };
    try {
        const [total, metodos_analuz] = yield Promise.all([
            metodo_analuz_1.default.findAndCountAll({ where: query }).then(result => result.count),
            metodo_analuz_1.default.findAll({ where: query })
            // , Seccion.findAll({ where:{ estado: true } })
        ]);
        res.json({
            total,
            metodos_analuz
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.getMetodosAnaluz = getMetodosAnaluz;
const getMetodoAnaluz = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const metodo_analuz = yield metodo_analuz_1.default.findByPk(id);
        res.json(metodo_analuz);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.getMetodoAnaluz = getMetodoAnaluz;
const postMetodoAnaluz = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const { estado } = body, metodoAnaluzBody = __rest(body, ["estado"]);
        const metodoAnaluz = metodo_analuz_1.default.build(metodoAnaluzBody);
        yield metodoAnaluz.save();
        res.json(metodoAnaluz);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postMetodoAnaluz = postMetodoAnaluz;
const putMetodoAnaluz = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const { estado } = body, metodoAnaluzBody = __rest(body, ["estado"]);
        const metodoAnaluz = yield metodo_analuz_1.default.findByPk(id);
        yield (metodoAnaluz === null || metodoAnaluz === void 0 ? void 0 : metodoAnaluz.update(metodoAnaluzBody));
        res.json(metodoAnaluz);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putMetodoAnaluz = putMetodoAnaluz;
const deleteMetodoAnaluz = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const metodoAnaluz = yield metodo_analuz_1.default.findByPk(id);
        yield (metodoAnaluz === null || metodoAnaluz === void 0 ? void 0 : metodoAnaluz.update({ estado: false }));
        return res.json(metodoAnaluz);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.deleteMetodoAnaluz = deleteMetodoAnaluz;
//# sourceMappingURL=metodo-analuz.js.map