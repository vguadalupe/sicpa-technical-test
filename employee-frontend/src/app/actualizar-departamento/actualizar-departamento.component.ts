import  swal   from 'sweetalert2'; 
import { DepartamentoService } from './../departamento.service';
import { Departamento } from './../departamento';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-departamento',
  templateUrl: './actualizar-departamento.component.html',
  styleUrls: ['./actualizar-departamento.component.css']
})
export class ActualizarDepartamentoComponent implements OnInit {

  id:number;
  departamento:Departamento = new Departamento();
  constructor(private departamentoService:DepartamentoService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.departamentoService.obtenerDepartamentoPorId(this.id).subscribe(dato =>{
      this.departamento = dato;
    },error => console.log(error));
  }

  irAlaListaDeDepartamentos(){
    this.router.navigate(['/departamentos']);
    swal.fire('Departamento actualizado',`El departamento ${this.departamento.nombre} ha sido actualizado con exito`,`success`);
  }

  onSubmit(){
    this.departamentoService.actualizarDepartamento(this.id,this.departamento).subscribe(dato => {
      this.irAlaListaDeDepartamentos();
    },error => console.log(error));
  }
}
