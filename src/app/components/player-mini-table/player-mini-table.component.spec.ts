import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerMiniTableComponent } from './player-mini-table.component';

describe('PlayerMiniTableComponent', () => {
  let component: PlayerMiniTableComponent;
  let fixture: ComponentFixture<PlayerMiniTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerMiniTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerMiniTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
