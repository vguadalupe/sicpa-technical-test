import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Empresa } from '../empresa';
import { EmpresaService } from '../empresa.service';
import {Location} from '@angular/common'

@Component({
  selector: 'app-empresa-detalles',
  templateUrl: './empresa-detalles.component.html',
  styleUrls: ['./empresa-detalles.component.css']
})
export class EmpresaDetallesComponent implements OnInit {

  id:number;
  empresa:Empresa;

  constructor(private route:ActivatedRoute,
    private empresaServicio:EmpresaService,
    private location:Location) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.empresa= new Empresa();
    this.empresaServicio.obtenerEmpresaPorId(this.id).subscribe(dato =>{
      this.empresa=dato;
    })
  }

  goBack():void{
    this.location.back();
  }


}
