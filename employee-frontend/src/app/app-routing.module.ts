import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarEmpleadoComponent } from './actualizar-empleado/actualizar-empleado.component';
import { EmpleadoDetallesComponent } from './empleado-detalles/empleado-detalles.component';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { ListaDepartamentosComponent } from './lista-departamentos/lista-departamentos.component';
import { ListaEmpresasComponent } from './lista-empresas/lista-empresas.component';


import { RegistrarEmpleadoComponent } from './registrar-empleado/registrar-empleado.component';
import { RegistrarDepartamentosComponent } from './registrar-departamentos/registrar-departamentos.component';
import { ActualizarDepartamentoComponent } from './actualizar-departamento/actualizar-departamento.component';
import { DepartamentoDetallesComponent } from './departamento-detalles/departamento-detalles.component';

import { RegistrarEmpresaComponent } from './registrar-empresa/registrar-empresa.component';
import { ActualizarEmpresaComponent } from './actualizar-empresa/actualizar-empresa.component';
import { EmpresaDetallesComponent } from './empresa-detalles/empresa-detalles.component';

const routes: Routes = [
  {path : 'empleados',component:ListaEmpleadosComponent},
  {path : 'departamentos',component:ListaDepartamentosComponent},
  {path : 'empresas',component:ListaEmpresasComponent},
  {path: '',redirectTo:'empleados',pathMatch:'full'},
  {path:'registrar-empleado',component:RegistrarEmpleadoComponent},
  {path:'actualizar-empleado/:id',component : ActualizarEmpleadoComponent},
  {path:'empleado-detalles/:id',component : EmpleadoDetallesComponent},
  {path:'registrar-departamentos',component:RegistrarDepartamentosComponent},
  {path:'actualizar-departamento/:id',component : ActualizarDepartamentoComponent},
  {path:'departamento-detalles/:id',component : DepartamentoDetallesComponent},

  {path:'registrar-empresas',component:RegistrarEmpresaComponent},
  {path:'actualizar-empresa/:id',component : ActualizarEmpresaComponent},
  {path:'empresa-detalles/:id',component : EmpresaDetallesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
