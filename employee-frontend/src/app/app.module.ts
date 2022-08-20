import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrarEmpleadoComponent } from './registrar-empleado/registrar-empleado.component'
import { FormsModule } from '@angular/forms';
import { ActualizarEmpleadoComponent } from './actualizar-empleado/actualizar-empleado.component';
import { EmpleadoDetallesComponent } from './empleado-detalles/empleado-detalles.component';
import { ListaDepartamentosComponent } from './lista-departamentos/lista-departamentos.component';
import { RegistrarDepartamentosComponent } from './registrar-departamentos/registrar-departamentos.component';
import { DepartamentoDetallesComponent } from './departamento-detalles/departamento-detalles.component';
import { ActualizarDepartamentoComponent } from './actualizar-departamento/actualizar-departamento.component';
import { ListaEmpresasComponent } from './lista-empresas/lista-empresas.component';
import { ActualizarEmpresaComponent } from './actualizar-empresa/actualizar-empresa.component';
import { EmpresaDetallesComponent } from './empresa-detalles/empresa-detalles.component';
import { RegistrarEmpresaComponent } from './registrar-empresa/registrar-empresa.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaEmpleadosComponent,
    RegistrarEmpleadoComponent,
    ActualizarEmpleadoComponent,
    EmpleadoDetallesComponent,
    ListaDepartamentosComponent,
    RegistrarDepartamentosComponent,
    DepartamentoDetallesComponent,
    ActualizarDepartamentoComponent,
    ListaEmpresasComponent,
    ActualizarEmpresaComponent,
    EmpresaDetallesComponent,
    RegistrarEmpresaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
