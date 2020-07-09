import { DeckCardComponent } from '../deck-card/deck-card.component';
import { GamePlayersService } from 'src/app/services/game-players.service';
import { PlayerDataService } from 'src/app/services/player-data.service';
import { Player } from 'src/app/classes/player';
import {
	Component,
	OnInit,
	Input,
	ChangeDetectorRef,
	ViewChildren,
	QueryList,
	HostListener,
} from '@angular/core';

@Component({
	selector: 'mc-player-mini-table',
	templateUrl: './player-mini-table.component.html',
	styleUrls: ['./player-mini-table.component.scss'],
})
export class PlayerMiniTableComponent implements OnInit {
	@Input() public player: Player;

	@ViewChildren('bankCards') public bankCards: QueryList<DeckCardComponent>;

	@HostListener('window:resize') public onResize() {
		if (this.bankCards?.length > 0) {
			const listWidth = 20;
			const cardWidth = listWidth / Math.min(this.bankCards.length, 10);
			this.bankCards.forEach((card) => {
				card.el.nativeElement.style.width = cardWidth + 'px';
			});
			this.cd.detectChanges();
		}
	}

	get totalMoney(): number {
		return this.bankCards?.reduce((prevValue, card: DeckCardComponent) => {
			return prevValue + card.card.value;
		}, 0);
	}

	constructor(
		private playerDataService: PlayerDataService,
		private gamePlayersService: GamePlayersService,
		private cd: ChangeDetectorRef
	) {}

	ngOnInit(): void {
		this.playerDataService.bankCards$.subscribe(() => {
			this.onResize();
			this.cd.detectChanges();
		});

		this.gamePlayersService.move$.subscribe((player: Player) => {
			if (this.player?.name === player?.name) {
				this.onResize();
				this.cd.detectChanges();
			}
		});
	}
}
