import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckCardComponent } from './deck-card.component';

describe('DeckComponent', () => {
	let component: DeckCardComponent;
	let fixture: ComponentFixture<DeckCardComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [DeckCardComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(DeckCardComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
