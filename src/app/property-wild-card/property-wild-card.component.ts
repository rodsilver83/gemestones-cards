import { Component, OnInit, Input } from '@angular/core';
import { CardColorsService } from '../services/card-colors.service';
import { PropertyWildCard } from '../classes/property-wild-card';

@Component({
	selector: 'mc-property-wild-card',
	templateUrl: './property-wild-card.component.html',
	styleUrls: ['./property-wild-card.component.scss'],
})
export class PropertyWildCardComponent implements OnInit {
	@Input() public config: PropertyWildCard;

	constructor(private cardColor: CardColorsService) {}

	bgColor(property) {
		if (property) {
			return this.cardColor.getColor(property.set);
		}
		return '';
	}

	ngOnInit() {}
}
