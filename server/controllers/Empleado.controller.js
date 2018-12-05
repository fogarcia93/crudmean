const Empleado = require('../models/empleados');
const empleadoCtrl = {};

empleadoCtrl.getEmpleados=  async (req, res) =>{
   const empleados = await Empleado.find();
   res.json(empleados);       
};

empleadoCtrl.createEmpleados = async (req, res) => {
    const empleado = new Empleado({
        nombre: req.body.nombre,
        puesto: req.body.puesto,
        ciudad: req.body.ciudad,
        salario: req.body.salario       
    });
    await empleado.save();
    res.json({
        'estado': 'Empleado Guardado'
    });
};

empleadoCtrl.getEmpleado = async (req, res) => {
     const empleado = await  Empleado.findById(req.params.id);
     res.json(empleado);
};

empleadoCtrl.editarEmpleado = async (req, res) => {
    const { id } = req.params;   
    const empleado ={
        nombre: req.body.nombre,
        puesto: req.body.puesto,
        ciudad: req.body.ciudad,
        salario: req.body.salario
    } 
    await Empleado.findByIdAndUpdate(id, {$set: empleado}, {new: true});
    res.json({status: 'Empleado Actualizado'});
};

empleadoCtrl.eliminarEmpleado = async(req, res) => {
     await Empleado.findByIdAndRemove(req.params.id);
     res.json({status: 'Empleado Eliminado'});
}

module.exports = empleadoCtrl;