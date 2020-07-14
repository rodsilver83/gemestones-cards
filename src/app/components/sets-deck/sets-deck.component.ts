import { Card } from './../../classes/card';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { PlayerDataService } from '../../services/player-data.service';
import {
	CdkDragDrop,
	moveItemInArray,
	transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
	selector: 'gs-sets-deck',
	templateUrl: './sets-deck.component.html',
	styleUrls: ['./sets-deck.component.scss'],
})
export class SetsDeckComponent implements OnInit {
	private sets: Card[][];

	constructor(
		public readonly playerDataService: PlayerDataService,
		private readonly cd: ChangeDetectorRef
	) {}

	get completeSets(): number {
		if (this.sets) {
			return this.sets.reduce((prev: number, set: Card[]) => {
				return prev + (set.length === 3 ? 1 : 0);
			}, 0);
		}
		return 0;
	}

	ngOnInit(): void {
		this.playerDataService.sets$.subscribe((sets: Card[][]) => {
			this.sets = sets;
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
