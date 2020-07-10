import {
	GemstoneWildOrientation,
	GemstoneWildCard,
} from './../../../classes/gemstone-wild-card';
import { CardColorsService } from './../../../services/card-colors.service';
import {
	Component,
	OnInit,
	Input,
	ChangeDetectorRef,
	HostListener,
} from '@angular/core';
import { Card, CardType, CardPlace } from 'src/app/classes/card';
import { PlayerDataService } from 'src/app/services/player-data.service';
import { GemstoneCard } from 'src/app/classes/gemstone-card';

@Component({
	selector: 'gs-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
	@Input() public config: Card;
	@Input() public valueRotate = false;

	@HostListener('mouseleave', ['$event']) onmouseout(event: MouseEvent) {
		this.toggleCardClick = false;
		this.showInfo = false;
		this.cd.detectChanges();
	}

	public showInfo = false;
	public clicked = false;
	public toggleCardClick = false;
	public toggleCardRotate = false;
	public readonly CardType = CardType;

	get isInHand(): boolean {
		return this.config?.place === CardPlace.HAND;
	}

	get isInSets(): boolean {
		return this.config?.place === CardPlace.SETS;
	}

	get isCardRotated(): boolean {
		return (
			this.config.type === CardType.GEMSTONEWILD &&
			(this.config as GemstoneWildCard).orientation ===
				GemstoneWildOrientation.DOWN
		);
	}

	constructor(
		private cardColor: CardColorsService,
		private playerService: PlayerDataService,
		private cd: ChangeDetectorRef
	) {}

	ngOnInit() {}

	toggleInfo(event: Event) {
		event.stopImmediatePropagation();
		this.showInfo = !this.showInfo;
		this.cd.detectChanges();
	}

	valueColor(top: boolean): string {
		if (this.config.type === CardType.GEMSTONE) {
			return this.cardColor.getColor((this.config as GemstoneCard).set);
		} else {
			if (this.config.type === CardType.GEMSTONEWILD) {
				const property = this.config as GemstoneWildCard;
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
		if (this.config.type === CardType.GEMSTONEWILD) {
			return top
				? (this.config as GemstoneWildCard).propertyA.textColor
				: (this.config as GemstoneWildCard).propertyB.textColor;
		}

		if (this.config.type === CardType.GEMSTONE) {
			return (this.config as GemstoneCard).textColor;
		}
	}

	moveMoney() {
		this.playerService.moveMoney(this.config.id);
		this.cd.detectChanges();
	}

	moveTable() {
		this.playerService.moveTable(this.config.id);
		this.cd.detectChanges();
	}

	movePile() {
		this.playerService.movePile(this.config.id);
		this.cd.detectChanges();
	}

	toggleCard() {
		this.toggleCardClick = !this.toggleCardClick;
		this.cd.detectChanges();
	}

	// Action only valid for GemstoneWildCard
	rotateCard(event: MouseEvent) {
		event.stopImmediatePropagation();
		this.toggleCardRotate = !this.toggleCardRotate;
		const wildCard = this.config as GemstoneWildCard;
		if (wildCard.orientation === GemstoneWildOrientation.UP) {
			wildCard.orientation = GemstoneWildOrientation.DOWN;
		} else {
			wildCard.orientation = GemstoneWildOrientation.UP;
		}
		this.cd.detectChanges();
	}
}
