import { Card } from './../../classes/card';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { PlayerDataService } from '../../services/player-data.service';
import {
	CdkDragDrop,
	moveItemInArray,
	transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
	selector: 'mc-sets-deck',
	templateUrl: './sets-deck.component.html',
	styleUrls: ['./sets-deck.component.scss'],
})
export class SetsDeckComponent implements OnInit {
	constructor(
		public readonly playerDataService: PlayerDataService,
		private readonly cd: ChangeDetectorRef
	) {}
	ngOnInit(): void {
		this.playerDataService.sets$.subscribe((cards: Card[][]) => {
			this.cd.detectChanges();
		});
	}

	drop(event: CdkDragDrop<string[]>) {
		if (event.previousContainer === event.container) {
			moveItemInArray(
				event.container.data,
				event.previousIndex,
				event.currentIndex
			);
		} else {
			transferArrayItem(
				event.previousContainer.data,
				event.container.data,
				event.previousIndex,
				event.currentIndex
			);
			this.playerDataService.deleteEmptySets();
		}
	}
}
