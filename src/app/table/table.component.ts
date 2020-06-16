import { Card } from './../classes/card';
import { Component, Input } from '@angular/core';
import { Player } from '../classes/player';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

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

	dropHand(event: CdkDragDrop<string[]>) {
		moveItemInArray(
			this.player.handCards,
			event.previousIndex,
			event.currentIndex
		);
	}
}
