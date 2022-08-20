import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Departamento } from './departamento';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {
  private baseURL = "http://localhost:8080/api/v2/departamentos";

  constructor(private httpClient : HttpClient) { }

  obtenerListaDepartamentos():Observable<Departamento[]>{
    return this.httpClient.get<Departamento[]>(`${this.baseURL}`);
  }

  registrarDepartamento(departamento:Departamento) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,departamento);

  }
  actualizarDepartamento(id:number,departamento:Departamento) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,departamento);
  }

   obtenerDepartamentoPorId(id:number):Observable<Departamento>{
    return this.httpClient.get<Departamento>(`${this.baseURL}/${id}`);
  }

  eliminarDepartamento(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }



}
