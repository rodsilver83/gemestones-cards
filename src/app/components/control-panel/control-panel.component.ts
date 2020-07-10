import { GamePlayersService } from '../../services/game-players.service';
import { DeckService } from '../../services/deck.service';
import { Card } from '../../classes/card';
import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';

@Component({
	selector: 'gs-control-panel',
	templateUrl: './control-panel.component.html',
	styleUrls: ['./control-panel.component.scss'],
})
export class ControlPanelComponent implements OnInit {
	public pileCard: Card;

	constructor(
		private deckService: DeckService,
		public gamePlayersService: GamePlayersService,
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
	}
}
