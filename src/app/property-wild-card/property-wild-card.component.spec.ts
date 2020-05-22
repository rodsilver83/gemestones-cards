import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyWildCardComponent } from './property-wild-card.component';

describe('PropertyWildCardComponent', () => {
  let component: PropertyWildCardComponent;
  let fixture: ComponentFixture<PropertyWildCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyWildCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyWildCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
