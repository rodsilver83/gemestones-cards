import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { PlayerDataService } from '../services/player-data.service';

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
	ngOnInit(): void {}
}
