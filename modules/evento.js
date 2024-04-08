const mongoose = require('mongoose');

const eventoSchema = new mongoose.Schema({
  nombre_evento: {
    type: String,
    required: [true, 'El nombre del evento es obligatorio'],
    trim: true, // Elimina espacios al inicio y al final
  },
  lugar: {
    type: String,
    required: [true, 'El lugar del evento es obligatorio'],
    trim: true,
  },
  fecha: {
    type: String, // Considera usar Date en vez de String para validaciones de fechas
    required: [true, 'La fecha del evento es obligatoria'],
    trim: true,
  },
  hora_inicio: {
    type: String, // Considera usar un formato específico o tipo Date
    required: [true, 'La hora de inicio es obligatoria'],
    trim: true,
  },
  hora_fin: {
    type: String, // Considera usar un formato específico o tipo Date
    required: [true, 'La hora de fin es obligatoria'],
    trim: true,
  },
  descripcion: {
    type: String,
    required: false, // Depende de si quieres que la descripción sea obligatoria o no
    trim: true,
  },
  usuarios: [{
    type: String,
    required: [true, 'Al menos un usuario es necesario'],
    // Considera validar el formato del correo electrónico si estos son correos
  }]
});

module.exports = mongoose.model('Evento', eventoSchema);
