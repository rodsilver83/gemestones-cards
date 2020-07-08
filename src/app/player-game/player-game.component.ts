import { DeckCardComponent } from './../deck-card/deck-card.component';
import { Card } from './../classes/card';
import { PlayerDataService } from '../services/player-data.service';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import {
	Component,
	OnInit,
	ChangeDetectorRef,
	HostListener,
	ViewChild,
	ElementRef,
	ViewChildren,
	QueryList,
	AfterViewChecked,
} from '@angular/core';

@Component({
	selector: 'mc-player-game',
	templateUrl: './player-game.component.html',
	styleUrls: ['./player-game.component.scss'],
})
export class PlayerGameComponent implements OnInit, AfterViewChecked {
	@ViewChild('handList') public handList: ElementRef;
	@ViewChild('bankList') public bankList: ElementRef;
	@ViewChildren('handCards') public handCards: QueryList<DeckCardComponent>;
	@ViewChildren('bankCards') public bankCards: QueryList<DeckCardComponent>;

	@HostListener('window:resize') public onResize() {
		if (this.handCards?.length > 0) {
			const listWidth = this.handList.nativeElement.clientWidth - 100;
			const cardWidth = listWidth / this.handCards.length;
			this.handCards.forEach((card) => {
				card.el.nativeElement.style.width = cardWidth + 'px';
			});
			this.calculatingHandWidth = false;
			this.cd.detectChanges();
		}

		if (this.bankCards?.length > 0) {
			const listWidth = this.bankList.nativeElement.clientWidth - 50;
			const cardWidth = listWidth / this.bankCards.length;
			console.log('**BankCard:', cardWidth);
			this.bankCards.forEach((card) => {
				card.el.nativeElement.style.width = cardWidth + 'px';
			});
			this.cd.detectChanges();
		}
	}

	public calculatingHandWidth = true;

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
		this.playerDataService.handCards$.subscribe((cards: Card[]) => {
			this.cd.detectChanges();
		});
		this.playerDataService.playCards$.subscribe((cards: Card[]) => {
			this.cd.detectChanges();
		});
	}

	dropHand(event: CdkDragDrop<Card[]>) {
		this.playerDataService.moveHand(event.previousIndex, event.currentIndex);
	}

	dropBank(event: CdkDragDrop<Card[]>) {
		this.playerDataService.moveBank(event.previousIndex, event.currentIndex);
	}
}
