import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarEmpleadoComponent } from './modificar-empleado.component';

describe('ModificarEmpleadoComponent', () => {
  let component: ModificarEmpleadoComponent;
  let fixture: ComponentFixture<ModificarEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarEmpleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
