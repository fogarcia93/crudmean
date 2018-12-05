export class Empleado {
    constructor(_id = '', nombre = '', puesto = '', ciudad = '', salario = 0) {
        this._id = _id;
        this.nombre = name;
        this.puesto = puesto;
        this.ciudad = ciudad;
        this.salario = salario;
    }

    _id: string;
    nombre: string;
    puesto: string;
    ciudad: string;
    salario: Number;
}
