import { PlayerDataService } from './../services/player-data.service';
import { GamePlayersService } from './../services/game-players.service';
import { Component, Input } from '@angular/core';

@Component({
	selector: 'mc-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss'],
})
export class TableComponent {
	constructor(
		private gameService: GamePlayersService,
		public playerDataService: PlayerDataService
	) {}
}
