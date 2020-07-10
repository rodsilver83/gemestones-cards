import { Component, OnInit, Input } from '@angular/core';
import { GemstoneWildCard } from 'src/app/classes/gemstone-wild-card';
import { CardColorsService } from 'src/app/services/card-colors.service';

@Component({
	selector: 'gs-gemstone-wild-card',
	templateUrl: './gemstone-wild-card.component.html',
	styleUrls: ['./gemstone-wild-card.component.scss'],
})
export class GemstoneWildCardComponent implements OnInit {
	@Input() public config: GemstoneWildCard;

	constructor(private cardColor: CardColorsService) {}

	ngOnInit() {}

	bgColor(gemstone) {
		if (gemstone) {
			return this.cardColor.getColor(gemstone.set);
		}
		return '';
	}
}
