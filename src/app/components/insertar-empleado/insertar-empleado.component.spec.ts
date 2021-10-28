import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarEmpleadoComponent } from './insertar-empleado.component';

describe('InsertarEmpleadoComponent', () => {
  let component: InsertarEmpleadoComponent;
  let fixture: ComponentFixture<InsertarEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertarEmpleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertarEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
