import { Schema, model } from 'mongoose'


const VehiculoSchema = new Schema({
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
},{
    collection: 'vehiculos'
})




const TrabajadorSchema = new Schema({
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
},{
    collection: 'trabajadores'
})



export const Vehiculos = model('vehiculos', VehiculoSchema  )
export const Trabajadores = model('trabajador', TrabajadorSchema  )
