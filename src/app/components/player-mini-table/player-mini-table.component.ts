import { PlayerDataService } from 'src/app/services/player-data.service';
import { Player } from 'src/app/classes/player';
import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';

@Component({
	selector: 'mc-player-mini-table',
	templateUrl: './player-mini-table.component.html',
	styleUrls: ['./player-mini-table.component.scss'],
})
export class PlayerMiniTableComponent implements OnInit {
	@Input() public player: Player;

	constructor(
		private playerDataService: PlayerDataService,
		private cd: ChangeDetectorRef
	) {}

	ngOnInit(): void {
		this.playerDataService.bankCards$.subscribe(() => {
			this.cd.detectChanges();
		});
	}
}
