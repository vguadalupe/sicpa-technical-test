import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Empresa } from '../empresa';
import { EmpresaService } from '../empresa.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-lista-empresas',
  templateUrl: './lista-empresas.component.html',
  styleUrls: ['./lista-empresas.component.css']
})
export class ListaEmpresasComponent implements OnInit {

  empresas:Empresa[];

  constructor(private empresaServicio:EmpresaService, private router:Router) { }

  ngOnInit(): void {
     this.obtenerEmpresas();
  }

  
  actualizarEmpresas(id:number){
    this.router.navigate(['actualizar-empresa',id]);
  }

   private obtenerEmpresas(){
    this.empresaServicio.obtenerListaEmpresas().subscribe(dato =>{
      this.empresas=dato;
    })
  }

  eliminarEmpresas(id:number){
    swal.fire({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar Empresa",
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
        this.empresaServicio.eliminarEmpresa(id).subscribe(dato => {
          console.log(dato);
          this.obtenerEmpresas();
          swal.fire(
            'Empresa eliminado',
            'La empresa ha sido eliminado con exito',
            'success'
          )
        })
      }
    })

  }

  verDetallesEmpresas(id:number){
     this.router.navigate(['empresa-detalles',id]);
  }


  
}
