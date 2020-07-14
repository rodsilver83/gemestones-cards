import { PlayerDataService } from './../services/player-data.service';
import { GamePlayersService } from './../services/game-players.service';
import { Component, Input } from '@angular/core';

@Component({
	selector: 'gs-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss'],
})
export class TableComponent {
	@Input() public isHost = false;

	constructor(
		private gameService: GamePlayersService,
		public playerDataService: PlayerDataService
	) {}
}
