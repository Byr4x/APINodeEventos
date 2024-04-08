// models/Practicante.js
const mongoose = require('mongoose');

const practicanteSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    apellidos: {
        type: String,
        required: true,
    },
    documento: {
        type: String,
        required: true,
        unique: true,
    },
    telefono: {
        type: String,
        required: true,
    },
    institucion: {
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

module.exports = mongoose.model('Practicante', practicanteSchema);
