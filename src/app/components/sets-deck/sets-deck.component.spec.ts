import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetsDeckComponent } from './sets-deck.component';

describe('SetsDeckComponent', () => {
  let component: SetsDeckComponent;
  let fixture: ComponentFixture<SetsDeckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetsDeckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetsDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
