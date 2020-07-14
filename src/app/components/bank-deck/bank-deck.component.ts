import { DeckCardComponent } from './../deck-card/deck-card.component';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import {
	Component,
	OnInit,
	ViewChild,
	ElementRef,
	ViewChildren,
	QueryList,
	HostListener,
	ChangeDetectorRef,
} from '@angular/core';
import { Card } from 'src/app/classes/card';
import { PlayerDataService } from 'src/app/services/player-data.service';

@Component({
	selector: 'gs-bank-deck',
	templateUrl: './bank-deck.component.html',
	styleUrls: ['./bank-deck.component.scss'],
})
export class BankDeckComponent implements OnInit {
	@ViewChild('bankList') public bankList: ElementRef;
	@ViewChildren('bankCards') public bankCards: QueryList<DeckCardComponent>;

	@HostListener('window:resize') public onResize() {
		if (this.bankCards?.length > 0) {
			const listWidth = this.bankList.nativeElement.clientWidth;
			const cardWidth = listWidth / Math.min(this.bankCards.length, 15);
			this.bankCards.forEach((card) => {
				card.el.nativeElement.style.width = cardWidth + 'px';
			});
			this.cd.detectChanges();
		}
	}

	get totalMoney(): number {
		if (this.bankCards) {
			return this.bankCards.reduce((prevValue, deckCard: DeckCardComponent) => {
				return prevValue + deckCard.config.value;
			}, 0);
		}
		return 0;
	}

	public calculatingHandWidth = true;
	public playCardsSets = <Card[]>[];

	constructor(
		public readonly playerDataService: PlayerDataService,
		private readonly cd: ChangeDetectorRef
	) {}

	ngAfterViewChecked() {
		this.calculatingHandWidth && this.onResize();
	}

	ngOnInit(): void {
		this.playerDataService.bankCards$.subscribe((cards: Card[]) => {
			this.onResize();
			this.cd.detectChanges();
		});
	}

	dropBank(event: CdkDragDrop<Card[]>) {
		this.playerDataService.moveBank(event.previousIndex, event.currentIndex);
	}
}
