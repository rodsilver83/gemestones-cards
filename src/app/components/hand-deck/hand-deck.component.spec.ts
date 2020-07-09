import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandDeckComponent } from './hand-deck.component';

describe('HandDeckComponent', () => {
  let component: HandDeckComponent;
  let fixture: ComponentFixture<HandDeckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandDeckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
