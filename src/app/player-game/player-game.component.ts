import { Card } from './../classes/card';
import { PlayerDataService } from '../services/player-data.service';
import { moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';
import { Player } from './../classes/player';
import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'mc-player-game',
	templateUrl: './player-game.component.html',
	styleUrls: ['./player-game.component.scss'],
})
export class PlayerGameComponent implements OnInit {
	constructor(public readonly playerDataService: PlayerDataService) {}

	ngOnInit(): void {}

	dropHand(event: CdkDragDrop<Card[]>) {
		this.playerDataService.moveHand(event.previousIndex, event.currentIndex);
	}
}
