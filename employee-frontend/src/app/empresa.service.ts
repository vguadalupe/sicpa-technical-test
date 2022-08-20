import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empresa } from './empresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  private baseURL = "http://localhost:8080/api/v3/empresas";

  constructor(private httpClient : HttpClient) { }

  obtenerListaEmpresas():Observable<Empresa[]>{
    return this.httpClient.get<Empresa[]>(`${this.baseURL}`);
  }

  registrarEmpresa(empresa:Empresa) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,empresa);

  }
  actualizarEmpresa(id:number,empresa:Empresa) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,empresa);
  }

   obtenerEmpresaPorId(id:number):Observable<Empresa>{
    return this.httpClient.get<Empresa>(`${this.baseURL}/${id}`);
  }

  eliminarEmpresa(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
