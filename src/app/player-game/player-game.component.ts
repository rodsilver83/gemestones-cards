import { moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';
import { Player } from './../classes/player';
import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'mc-player-game',
	templateUrl: './player-game.component.html',
	styleUrls: ['./player-game.component.scss'],
})
export class PlayerGameComponent implements OnInit {
	@Input() public player: Player;

	constructor() {}

	ngOnInit(): void {}

	dropHand(event: CdkDragDrop<string[]>) {
		moveItemInArray(
			this.player.handCards,
			event.previousIndex,
			event.currentIndex
		);
	}
}
