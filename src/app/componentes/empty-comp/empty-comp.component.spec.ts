import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyCompComponent } from './empty-comp.component';

describe('EmptyCompComponent', () => {
  let component: EmptyCompComponent;
  let fixture: ComponentFixture<EmptyCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptyCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
