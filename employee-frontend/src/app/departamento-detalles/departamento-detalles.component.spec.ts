import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentoDetallesComponent } from './departamento-detalles.component';

describe('DepartamentoDetallesComponent', () => {
  let component: DepartamentoDetallesComponent;
  let fixture: ComponentFixture<DepartamentoDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartamentoDetallesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartamentoDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
