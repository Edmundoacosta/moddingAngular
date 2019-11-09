import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeSoporteComponent } from './mensaje-soporte.component';

describe('MensajeSoporteComponent', () => {
  let component: MensajeSoporteComponent;
  let fixture: ComponentFixture<MensajeSoporteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensajeSoporteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensajeSoporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
