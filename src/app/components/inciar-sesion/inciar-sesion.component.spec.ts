import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InciarSesionComponent } from './inciar-sesion.component';

describe('InciarSesionComponent', () => {
  let component: InciarSesionComponent;
  let fixture: ComponentFixture<InciarSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InciarSesionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InciarSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
