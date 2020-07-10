import { Component, OnInit, Input } from '@angular/core';
import { CardColorsService } from '../../../services/card-colors.service';
import { GemstoneCard } from '../../../classes/gemstone-card';

@Component({
	selector: 'gs-gemstone-card',
	templateUrl: './gemstone-card.component.html',
	styleUrls: ['./gemstone-card.component.scss'],
})
export class GemstoneCardComponent implements OnInit {
	@Input() public config: GemstoneCard;

	get bgColor() {
		return this.cardColor.getColor(this.config?.set);
	}

	constructor(private cardColor: CardColorsService) {}

	ngOnInit() {}
}
