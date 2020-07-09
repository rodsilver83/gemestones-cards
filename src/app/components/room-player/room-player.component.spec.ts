import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomPlayerComponent } from './room-player.component';

describe('RoomPlayerComponent', () => {
  let component: RoomPlayerComponent;
  let fixture: ComponentFixture<RoomPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
