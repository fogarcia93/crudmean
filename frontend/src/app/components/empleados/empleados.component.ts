import { Component, OnInit } from '@angular/core';

import { EmpleadoService } from "../../services/empleado.service";
import { NgForm } from '@angular/forms'
import { Empleado } from 'src/app/models/empleado';
import { from } from 'rxjs';

declare var M: any;

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css'],
  providers: [EmpleadoService]
})
export class EmpleadosComponent implements OnInit {

  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit() {
    this.getEmpleados();
  }

  AgregarEmpleado(form: NgForm){
    if(form.value._id){
      this.empleadoService.putEmpleados(form.value)
      .subscribe(res => {
        this.resetForm(form);
        M.toast({html: 'Empleado Actualizado'})
        this.getEmpleados();
      })
    } else{
      this.empleadoService.postEmpleados(form.value)
      .subscribe(res => {
        this.resetForm(form);
        M.toast({html: 'Empleado Agregado'})
        this.getEmpleados();
      });
    }
  }

  getEmpleados(){
    this.empleadoService.getEmpleados()
    .subscribe(res => {
      this.empleadoService.empleados = res as Empleado[];
      console.log(res);
    });
  }

  editarEmpleado(empleado: Empleado){
    this.empleadoService.selectedEmpleado = empleado;

  }

  eliminarEmpleado(_id: string){
    if(confirm('Esta seguro que desea eliminarlo?')){
      this.empleadoService.deleteEmpleados(_id)
      .subscribe(res =>{ 
        this.getEmpleados();
        M.toast({html: 'Empleado Eliminado'})
      });
      
    }
   
  }
  resetForm(form?: NgForm){
   if(form){
   form.reset();
   this.empleadoService.selectedEmpleado = new Empleado;
   }
  }

}
