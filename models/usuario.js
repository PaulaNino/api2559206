const {Schema, model} = require('mongoose')

const UsuarioSchema = Schema({//Estructura del modelo
    nombre: {//Coleccion
        type: String,
        required: [true, 'El campo nombre es requierido']
    },
    password: {
        type: String,
        required: [true, 'El password es requerido']
    },
    rol: {
        type: String,
        required: true,
        enum: ['Admin', 'Asesor']
    },
    estado: {
        type: Boolean,
        required: [true, 'El estado es obligatorio'],
        default: true,
        
    }
}) 

//Exportar un modelo
module.exports = model('Usuario', UsuarioSchema) 
