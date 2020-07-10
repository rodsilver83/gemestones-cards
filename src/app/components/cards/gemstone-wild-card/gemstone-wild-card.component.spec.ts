import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GemstoneWildCardComponent } from './gemstone-wild-card.component';

describe('GemstoneWildCardComponent', () => {
	let component: GemstoneWildCardComponent;
	let fixture: ComponentFixture<GemstoneWildCardComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [GemstoneWildCardComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(GemstoneWildCardComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
