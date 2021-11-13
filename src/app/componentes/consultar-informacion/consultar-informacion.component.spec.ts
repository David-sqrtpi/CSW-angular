import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarInformacionComponent } from './consultar-informacion.component';

describe('ConsultarInformacionComponent', () => {
  let component: ConsultarInformacionComponent;
  let fixture: ComponentFixture<ConsultarInformacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarInformacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
