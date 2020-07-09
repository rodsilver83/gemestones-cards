import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Card } from '../../classes/card';
import {
	Component,
	OnInit,
	ElementRef,
	ViewChild,
	ViewChildren,
	QueryList,
	HostListener,
	ChangeDetectorRef,
	AfterViewChecked,
} from '@angular/core';
import { DeckCardComponent } from '../deck-card/deck-card.component';
import { PlayerDataService } from '../../services/player-data.service';

@Component({
	selector: 'mc-hand-deck',
	templateUrl: './hand-deck.component.html',
	styleUrls: ['./hand-deck.component.scss'],
})
export class HandDeckComponent implements OnInit, AfterViewChecked {
	@ViewChild('handList') public handList: ElementRef;
	@ViewChildren('handCards') public handCards: QueryList<DeckCardComponent>;

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
		this.playerDataService.handCards$.subscribe((cards: Card[]) => {
			this.cd.detectChanges();
			this.onResize();
		});
	}

	dropHand(event: CdkDragDrop<Card[]>) {
		this.playerDataService.moveHand(event.previousIndex, event.currentIndex);
	}
}
