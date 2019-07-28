import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoPrincipalComponent } from './grafico-principal.component';

describe('GraficoPrincipalComponent', () => {
  let component: GraficoPrincipalComponent;
  let fixture: ComponentFixture<GraficoPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
