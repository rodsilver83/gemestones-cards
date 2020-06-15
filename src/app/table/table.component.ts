import { Component, Input } from '@angular/core';
import { Player } from '../classes/player';
import {
	CdkDragDrop,
	moveItemInArray,
	transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss'],
})
export class TableComponent {
	@Input() public player: Player;
	@Input() public statusMsg: string;

	dropHand(event: CdkDragDrop<string[]>) {
		moveItemInArray(
			this.player.handCards,
			event.previousIndex,
			event.currentIndex
		);
	}
}
