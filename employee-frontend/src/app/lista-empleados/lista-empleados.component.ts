import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {

  empleados:Empleado[];

  constructor(private empleadoServicio:EmpleadoService, private router:Router) { }

  ngOnInit(): void {
     this.obtenerEmpleados();
  }

  actualizarEmpleados(id:number){
    this.router.navigate(['actualizar-empleado',id]);
  }

   private obtenerEmpleados(){
    this.empleadoServicio.obtenerListaEmpleados().subscribe(dato =>{
      this.empleados=dato;
    })
  }

  eliminarEmpleados(id:number){
    swal.fire({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar al empleado",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si , elimínalo',
      cancelButtonText: 'No, cancelar',
      confirmButtonAriaLabel: 'btn btn-success',
      cancelButtonAriaLabel: 'btn btn-danger',
      buttonsStyling: true
    }).then((result) => {
      if(result.value){
        this.empleadoServicio.eliminarEmpleado(id).subscribe(dato => {
          console.log(dato);
          this.obtenerEmpleados();
          swal.fire(
            'Empleado eliminado',
            'El empleado ha sido eliminado con exito',
            'success'
          )
        })
      }
    })

  }

  verDetallesEmpleados(id:number){
     this.router.navigate(['empleado-detalles',id]);
  }

 



}
