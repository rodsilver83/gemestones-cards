import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankDeckComponent } from './bank-deck.component';

describe('BankDeckComponent', () => {
  let component: BankDeckComponent;
  let fixture: ComponentFixture<BankDeckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankDeckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
