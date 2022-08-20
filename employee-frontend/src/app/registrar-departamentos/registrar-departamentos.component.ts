import { DepartamentoService } from './../departamento.service';
import { Departamento } from './../departamento';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-departamentos',
  templateUrl: './registrar-departamentos.component.html',
  styleUrls: ['./registrar-departamentos.component.css']
})
export class RegistrarDepartamentosComponent implements OnInit {

  departamento : Departamento = new Departamento();
  constructor(private departamentoServicio:DepartamentoService,private router:Router) { }

  ngOnInit(): void {
  }


  guardarDepartamento(){
    this.departamentoServicio.registrarDepartamento(this.departamento).subscribe(dato => {
      console.log(dato);
      this.irALaListaDeDepartamentos();
    },error => console.log(error));
  }

  irALaListaDeDepartamentos(){
    this.router.navigate(['/departamentos']);
    swal.fire('Departamento registrado',`El Departamento ${this.departamento.descripcion} ha sido registrado con exito`,`success`);
  }

  onSubmit(){
    this.guardarDepartamento();
														   
  }







}
