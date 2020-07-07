import { GamePlayersService } from './../services/game-players.service';
import { DeckService } from './../services/deck.service';
import { Card } from './../classes/card';
import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'mc-control-panel',
	templateUrl: './control-panel.component.html',
	styleUrls: ['./control-panel.component.scss'],
})
export class ControlPanelComponent implements OnInit {
	public pileCard: Card;

	constructor(
		private deckService: DeckService,
		public gamePlayersService: GamePlayersService
	) {}

	ngOnInit() {
		this.deckService.pileTopCard$.subscribe((card: Card) => {
			this.pileCard = card;
		});

		this.gamePlayersService.status$.subscribe((msg: string) => {
			console.log('MSG: ', msg);
		});
	}
}
