const mongoose = require('mongoose');
const { Schema } = mongoose;

const EsquemaEmpelados = new Schema ({
    nombre: { type: String, required: true },
    puesto: { type: String, required: true },
    ciudad: { type: String, required: true },
    salario: { type: Number, required: true }
})

module.exports = mongoose.model('Empleados', EsquemaEmpelados);