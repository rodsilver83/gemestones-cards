import { Player } from './../../classes/player';
import { PlayerDataService } from './../../services/player-data.service';
import { GamePlayersService } from './../../services/game-players.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
	selector: 'mc-players-list',
	templateUrl: './players-list.component.html',
	styleUrls: ['./players-list.component.scss'],
})
export class PlayersListComponent implements OnInit {
	public playerModal = null;
	public modalActive = false;

	constructor(
		public gamePlayersService: GamePlayersService,
		public playerDataService: PlayerDataService,
		private cd: ChangeDetectorRef
	) {}

	ngOnInit(): void {
		this.gamePlayersService.move$.subscribe((player: Player) => {
			if (this.playerModal?.name === player?.name) {
				this.playerModal = player;
				this.cd.detectChanges();
			}
		});
	}

	openModal(player: Player) {
		this.playerModal = player;
		this.modalActive = true;
		this.cd.detectChanges();
	}

	closeModal() {
		this.modalActive = false;
	}
}
