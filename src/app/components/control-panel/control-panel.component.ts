import { GamePlayersService } from '../../services/game-players.service';
import { DeckService } from '../../services/deck.service';
import { Card } from '../../classes/card';
import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { PlayerDataService } from 'src/app/services/player-data.service';
import { Player } from 'src/app/classes/player';

@Component({
	selector: 'gs-control-panel',
	templateUrl: './control-panel.component.html',
	styleUrls: ['./control-panel.component.scss'],
})
export class ControlPanelComponent implements OnInit {
	@Input() public isHost = false;

	public pileCard: Card;
	public loading = false;
	public isMyTurn = false;

	constructor(
		private deckService: DeckService,
		public gamePlayersService: GamePlayersService,
		private playerService: PlayerDataService,
		private cd: ChangeDetectorRef
	) {}

	ngOnInit() {
		this.deckService.pileTopCard$.subscribe((card: Card) => {
			this.pileCard = card;
			this.cd.detectChanges();
		});

		this.gamePlayersService.status$.subscribe((msg: string) => {
			this.cd.detectChanges();
		});

		this.gamePlayersService.turn$.subscribe((player: Player) => {
			if (this.playerService.playerName === player?.name) {
				this.isMyTurn = true;
			}
			this.cd.detectChanges();
		});
	}

	finishMyTurn() {
		this.isMyTurn = false;
	}
}
