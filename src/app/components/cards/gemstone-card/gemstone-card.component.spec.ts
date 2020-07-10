import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GemstoneCardComponent } from './gemstone-card.component';

describe('GemstoneCardComponent', () => {
	let component: GemstoneCardComponent;
	let fixture: ComponentFixture<GemstoneCardComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [GemstoneCardComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(GemstoneCardComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
