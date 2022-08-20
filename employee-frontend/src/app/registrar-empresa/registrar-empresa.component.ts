import { EmpresaService } from './../empresa.service';
import { Empresa } from './../empresa';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-empresa',
  templateUrl: './registrar-empresa.component.html',
  styleUrls: ['./registrar-empresa.component.css']
})
export class RegistrarEmpresaComponent implements OnInit {

  empresa : Empresa = new Empresa();
  constructor(private empresaServicio:EmpresaService,private router:Router) { }

  ngOnInit(): void {
  }


  guardarEmpresa(){
    this.empresaServicio.registrarEmpresa(this.empresa).subscribe(dato => {
      console.log(dato);
      this.irALaListaDeEmpresa();
    },error => console.log(error));
  }

  irALaListaDeEmpresa(){
    this.router.navigate(['/empresas']);
    swal.fire('Empresa registrado',` Empresa ${this.empresa.nombre} ha sido registrado con exito`,`success`);
  }

  onSubmit(){
    this.guardarEmpresa();
														   
  }

}
