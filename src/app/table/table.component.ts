import { Card } from './../classes/card';
import { Component, Input } from '@angular/core';
import { Player } from '../classes/player';

@Component({
	selector: 'mc-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss'],
})
export class TableComponent {
	@Input() public player: Player;
	@Input() public players: Player[];
	@Input() public statusMsg: string;
	@Input() public actionCard: Card;
}
