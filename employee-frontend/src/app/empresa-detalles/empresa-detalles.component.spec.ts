import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaDetallesComponent } from './empresa-detalles.component';

describe('EmpresaDetallesComponent', () => {
  let component: EmpresaDetallesComponent;
  let fixture: ComponentFixture<EmpresaDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpresaDetallesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresaDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
