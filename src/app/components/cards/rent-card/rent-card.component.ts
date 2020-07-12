import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CardColorsService } from '../../../services/card-colors.service';
import { RentCard } from '../../../classes/rent-card';

@Component({
	selector: 'gs-rent-card',
	templateUrl: './rent-card.component.html',
	styleUrls: ['./rent-card.component.scss'],
})
export class RentCardComponent implements OnInit {
	@Input() public config: RentCard;

	get backgroundColor() {
		if (!this.config.wild) {
			return this.cardColor.getColor(this.config.rentSet1);
		} else {
			return this.cardColor.getRainbowLinearGradient('bottom');
		}
	}

	get iconColor(): string {
		if ([2, 6, 9].includes(this.config.rentSet1)) {
			return this.cardColor.black;
		}
		return this.cardColor.getColor(this.config.rentSet1);
	}

	constructor(
		private sanitizer: DomSanitizer,
		private cardColor: CardColorsService
	) {}

	ngOnInit() {}
}
