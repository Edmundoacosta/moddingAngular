import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamerzoneComponent } from './gamerzone.component';

describe('GamerzoneComponent', () => {
  let component: GamerzoneComponent;
  let fixture: ComponentFixture<GamerzoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamerzoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamerzoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
