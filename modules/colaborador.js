// models/Colaborador.js
const mongoose = require('mongoose');

const colaboradorSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    telefono: {
        type: String,
        required: true,
    },
    direccion: {
        type: String,
        required: true,
    },
    barrio: {
        type: String,
        required: true,
    },
    gmail: {
        type: String,
        required: true,
        unique: true,
    },
    contrasena: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Colaborador', colaboradorSchema);
