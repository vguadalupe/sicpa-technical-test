import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Departamento } from '../departamento';
import { DepartamentoService } from '../departamento.service';
import {Location} from '@angular/common'

@Component({
  selector: 'app-departamento-detalles',
  templateUrl: './departamento-detalles.component.html',
  styleUrls: ['./departamento-detalles.component.css']
})
export class DepartamentoDetallesComponent implements OnInit {
  id:number;
  departamento:Departamento;

  constructor(private route:ActivatedRoute,
    private departamentoServicio:DepartamentoService,
    private location:Location) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.departamento= new Departamento();
    this.departamentoServicio.obtenerDepartamentoPorId(this.id).subscribe(dato =>{
      this.departamento=dato;
    })
  }

  goBack():void{
    this.location.back();
  }


}
