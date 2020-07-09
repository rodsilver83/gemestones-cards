import { Component, OnInit, Input } from '@angular/core';
import { PropertyWildCard } from 'src/app/classes/property-wild-card';
import { CardColorsService } from 'src/app/services/card-colors.service';

@Component({
	selector: 'mc-property-wild-card',
	templateUrl: './property-wild-card.component.html',
	styleUrls: ['./property-wild-card.component.scss'],
})
export class PropertyWildCardComponent implements OnInit {
	@Input() public config: PropertyWildCard;

	constructor(private cardColor: CardColorsService) {}

	ngOnInit() {}

	bgColor(property) {
		if (property) {
			return this.cardColor.getColor(property.set);
		}
		return '';
	}
}
