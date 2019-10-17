import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Checkout4Component } from './checkout4.component';

describe('Checkout4Component', () => {
  let component: Checkout4Component;
  let fixture: ComponentFixture<Checkout4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Checkout4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Checkout4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
