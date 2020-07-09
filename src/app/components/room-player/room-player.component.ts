import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Player } from 'src/app/classes/player';
import { ActivatedRoute } from '@angular/router';
import { ConnectionService } from 'src/app/services/connection.service';
import { PlayerDataService } from 'src/app/services/player-data.service';
import { ConnData, ConnDataType } from 'src/app/classes/conn-data';

@Component({
	selector: 'mc-room-player',
	templateUrl: './room-player.component.html',
	styleUrls: ['./room-player.component.scss'],
})
export class RoomPlayerComponent implements OnInit {
	public sendMsg = new FormControl('');
	public roomName: string;
	public player: Player;
	public statusMsg: string;

	public players = new Map<string, Player>();

	constructor(
		private route: ActivatedRoute,
		private conn: ConnectionService,
		private cd: ChangeDetectorRef,
		private playerDataService: PlayerDataService
	) {}

	ngOnInit() {
		this.player = new Player();

		this.route.params.subscribe((params) => {
			this.player.name = params.player;
			this.roomName = params.name;
			this.stablishConnection();
		});

		this.initConnection();
	}

	initConnection() {
		this.conn.connection$.subscribe((data: ConnData) => {
			switch (data.type) {
				case ConnDataType.DEAL:
					// this.player.handCards = data.data;
					this.players.set(data.data.name, data.data);
					if (this.player.name === data.data.name) {
						this.playerDataService.playerCards = data.data;
					}
					break;
				case ConnDataType.STAUS:
					this.statusMsg = data.data;
					break;
			}
			this.cd.detectChanges();
		});
	}

	stablishConnection() {
		// PLAYER
		this.conn.createConnection(this.roomName, this.player.name);
	}
}
