"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trabajadores = exports.Vehiculos = void 0;
const mongoose_1 = require("mongoose");
const VehiculoSchema = new mongoose_1.Schema({
    tipoTransp: {
        type: String
    },
    matricula: {
        type: String
    },
    numPlazas: {
        type: Number
    },
    fechaInicio: {
        type: Date
    },
    conductores: {
        type: Array
    },
    trayecto: [
        {
            parada: String,
            precio: Number
        }
    ],
    combustible: {
        type: String
    },
    pagoT: {
        type: Boolean
    }
}, {
    collection: 'vehiculos'
});
const TrabajadorSchema = new mongoose_1.Schema({
    tipoT: {
        type: String
    },
    DNI: {
        type: String
    },
    nombre: {
        type: String
    },
    apellidos: {
        type: String
    },
    fechaNac: {
        type: Date
    },
    horasSem: {
        type: Number
    },
    salHora: {
        type: Number
    },
    especialidad: {
        type: String
    },
    vehiculo: {
        type: Array
    }
}, {
    collection: 'trabajadores'
});
exports.Vehiculos = (0, mongoose_1.model)('vehiculos', VehiculoSchema);
exports.Trabajadores = (0, mongoose_1.model)('trabajador', TrabajadorSchema);
