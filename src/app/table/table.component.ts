import { Component, Input } from '@angular/core';
import { Player } from '../classes/player';

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss'],
})
export class TableComponent {
	@Input() public player: Player;

	public statusMsg = 'Waiting for Host to start the game.';
}
