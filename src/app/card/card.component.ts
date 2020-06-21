import { PlayerDataService } from './../player-data.service';
import { PropertyWildCard } from './../classes/property-wild-card';
import { PropertyCard } from './../classes/property-card';
import { CardColorsService } from './../services/card-colors.service';
import { Component, OnInit, Input } from '@angular/core';
import { Card, CardType } from '../classes/card';

@Component({
	selector: 'mc-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
	@Input() public config: Card;
	@Input() public valueRotate = false;

	public showInfo = false;
	public clicked = false;
	public readonly CardType = CardType;

	constructor(
		private cardColor: CardColorsService,
		private playerService: PlayerDataService
	) {}

	ngOnInit() {}

	toggleInfo(event: Event) {
		event.stopImmediatePropagation();
		this.showInfo = !this.showInfo;
	}

	valueColor(top: boolean): string {
		if (this.config.type === CardType.PROPERTY) {
			return this.cardColor.getColor((this.config as PropertyCard).set);
		} else {
			if (this.config.type === CardType.PROPERTYWILD) {
				const property = this.config as PropertyWildCard;
				if (top) {
					return this.cardColor.getColor(property.propertyA.set);
				} else {
					return this.cardColor.getColor(property.propertyB.set);
				}
			} else {
				return this.config.bgColor;
			}
		}
	}

	valueTextColor(top: boolean): string {
		if (this.config.type === CardType.PROPERTYWILD) {
			return top
				? (this.config as PropertyWildCard).propertyA.textColor
				: (this.config as PropertyWildCard).propertyB.textColor;
		}

		if (this.config.type === CardType.PROPERTY) {
			return (this.config as PropertyCard).textColor;
		}
	}

	moveMoney() {
		this.playerService.moveMoney(this.config.id);
	}

	moveTable() {
		this.playerService.moveTable(this.config.id);
	}
}
