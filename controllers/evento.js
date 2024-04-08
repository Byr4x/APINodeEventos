const { response } = require('express');
const Evento = require('../modules/evento');
const Practicante = require('../modules/practicante'); // Asume esto
const Colaborador = require('../modules/colaborador'); // Asume esto

const eventosGet = async (req, res) => {
    const { gmail } = req.query; // Cambiado a req.query para usar parámetros de consulta
    try {
        const practicante = await Practicante.findOne({ gmail });
        const colaborador = await Colaborador.findOne({ gmail });

        if (!practicante && !colaborador) {
            return res.status(400).json({
                msg: 'Usuario no encontrado'
            });
        }

        const eventos = await Evento.find({ usuarios: gmail });
        res.json({
            eventos
        });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener eventos' });
    }
};

module.exports = {
    eventosGet,
};

