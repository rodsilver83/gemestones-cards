import { GamePlayersService } from './../../services/game-players.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Player } from 'src/app/classes/player';
import { ActivatedRoute } from '@angular/router';
import { ConnectionService } from 'src/app/services/connection.service';
import { PlayerDataService } from 'src/app/services/player-data.service';
import { ConnData, ConnDataType } from 'src/app/classes/conn-data';
import { Card } from 'src/app/classes/card';
import * as MESSAGES from '../../../assets/messages.json';

@Component({
	selector: 'gs-room-player',
	templateUrl: './room-player.component.html',
	styleUrls: ['./room-player.component.scss'],
})
export class RoomPlayerComponent implements OnInit {
	private roomName: string;

	constructor(
		private route: ActivatedRoute,
		private conn: ConnectionService,
		private cd: ChangeDetectorRef,
		private playerDataService: PlayerDataService,
		private gamePlayersService: GamePlayersService
	) {}

	ngOnInit() {
		this.playerDataService.localPlayer = new Player();

		this.route.params.subscribe((params) => {
			this.playerDataService.localPlayer.name = params.player;
			this.roomName = params.name;
			this.stablishConnection();
		});

		this.initConnection();

		this.playerDataService.moveCards$.subscribe(() => {
			this.conn.sendData(ConnDataType.MOVE, this.playerDataService.localPlayer);
		});

		this.playerDataService.discarCard$.subscribe((card: Card) => {
			this.conn.sendData(ConnDataType.DISCARD, card);
		});
	}

	initConnection() {
		this.conn.connection$.subscribe((data: ConnData) => {
			switch (data.type) {
				case ConnDataType.DEAL:
					this.gamePlayersService.updatePlayerCards(data.data);
					break;
				case ConnDataType.STAUS:
					this.gamePlayersService.setStatusMessage(data.data);
					break;
				case ConnDataType.MOVE:
					this.gamePlayersService.updatePlayerCards(data.data);
					break;
				case ConnDataType.TURN:
					if (this.playerDataService.playerName === data.player) {
						this.gamePlayersService.setStatusMessage(
							`${data.player} ${(MESSAGES as any).STATUS.YOURTURN}`
						);
						this.playerDataService.addTurnDrawCards(data.data);
					} else {
						this.gamePlayersService.setStatusMessage(
							`${data.player} ${(MESSAGES as any).STATUS.ISPLAYING}`
						);
					}
					break;
				case ConnDataType.START:
					this.gamePlayersService.setStatusMessage(
						(MESSAGES as any).STATUS.GAMEBEGINS
					);
					data.data.forEach((player: Player) => {
						if (this.playerDataService.playerName === player.name) {
							this.gamePlayersService.addNewLocalPlayer(player);
						} else {
							this.gamePlayersService.addNewPlayer(player);
						}
					});
					break;
			}
			this.cd.detectChanges();
		});
	}

	stablishConnection() {
		// PLAYER
		this.conn.createConnection(
			this.roomName,
			this.playerDataService.playerName
		);
	}
}
