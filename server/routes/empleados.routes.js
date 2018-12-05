const express = require('express');
const router = express.Router();

const empleado = require('../controllers/Empleado.controller');

router.get('/', empleado.getEmpleados);
router.post('/', empleado.createEmpleados);
router.get('/:id', empleado.getEmpleado);
router.put('/:id', empleado.editarEmpleado);
router.delete('/:id', empleado.eliminarEmpleado);

module.exports = router; 