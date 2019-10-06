import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonaGamerdetailComponent } from './zona-gamerdetail.component';

describe('ZonaGamerdetailComponent', () => {
  let component: ZonaGamerdetailComponent;
  let fixture: ComponentFixture<ZonaGamerdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZonaGamerdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZonaGamerdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
