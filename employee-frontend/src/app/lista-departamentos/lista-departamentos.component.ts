import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Departamento } from '../departamento';
import { DepartamentoService } from '../departamento.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-lista-departamentos',
  templateUrl: './lista-departamentos.component.html',
  styleUrls: ['./lista-departamentos.component.css']
})
export class ListaDepartamentosComponent implements OnInit {

  departamentos:Departamento[];

  constructor(private departamentoServicio:DepartamentoService, private router:Router) { }

  ngOnInit(): void {
     this.obtenerDepartamentos();
  }


  
  actualizarDepartamentos(id:number){
    this.router.navigate(['actualizar-departamento',id]);
  }

   private obtenerDepartamentos(){
    this.departamentoServicio.obtenerListaDepartamentos().subscribe(dato =>{
      this.departamentos=dato;
    })
  }

  eliminarDepartamentos(id:number){
    swal.fire({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar departamento",
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
        this.departamentoServicio.eliminarDepartamento(id).subscribe(dato => {
          console.log(dato);
          this.obtenerDepartamentos();
          swal.fire(
            'Departamento eliminado',
            'El departamento ha sido eliminado con exito',
            'success'
          )
        })
      }
    })

  }

  verDetallesDepartamentos(id:number){
     this.router.navigate(['departamento-detalles',id]);
  }





}
