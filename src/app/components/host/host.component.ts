import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Player } from 'src/app/classes/player';
import { ActivatedRoute } from '@angular/router';
import { ConnectionService } from 'src/app/services/connection.service';
import { DeckService } from 'src/app/services/deck.service';
import { PlayerDataService } from 'src/app/services/player-data.service';
import { GamePlayersService } from 'src/app/services/game-players.service';
import { take } from 'rxjs/operators';
import { ConnData, ConnDataType } from 'src/app/classes/conn-data';
import { Card } from 'src/app/classes/card';
import * as MESSAGES from '../../../assets/messages.json';

@Component({
	selector: 'gs-host',
	templateUrl: './host.component.html',
	styleUrls: ['./host.component.scss'],
})
export class HostComponent implements OnInit {
	public roomName: string;
	public statusMsg = 'Shuffling  Cards...';
	public deckReady = false;

	constructor(
		private route: ActivatedRoute,
		private conn: ConnectionService,
		private cd: ChangeDetectorRef,
		private deckService: DeckService,
		private playerDataService: PlayerDataService,
		public gamePlayersService: GamePlayersService
	) {}

	ngOnInit() {
		this.gamePlayersService.setStatusMessage(
			(MESSAGES as any).STATUS.WAITINGHOST
		);

		this.route.params.subscribe((params) => {
			this.roomName = params.name;
			this.playerDataService.localPlayer = new Player({ name: params.player });
			this.gamePlayersService.addNewLocalPlayer(
				new Player({ name: this.playerDataService.playerName })
			);
			this.stablishConnection();
		});

		this.playerDataService.bankCards$.subscribe(() => {
			this.conn.sendDataClients(
				ConnDataType.DEAL,
				this.playerDataService.localPlayer
			);
		});

		this.playerDataService.discarCard$.subscribe((card: Card) => {
			this.deckService.discardCard(card);
		});
	}

	drawCard() {
		const card = this.deckService.drawFromDeck(1);
		const pileCard = card[0];
		this.deckService.putCardInPile(pileCard);
		this.cd.detectChanges();
	}

	stablishConnection() {
		// HOST
		this.conn
			.createPeer(this.playerDataService.playerName, this.roomName)
			.pipe(take(1))
			.subscribe(() => {});

		this.conn.connection$.subscribe((data: ConnData) => {
			switch (data.type) {
				case ConnDataType.HANDSHAKE:
					this.conn.sendDataClients(
						ConnDataType.STAUS,
						(MESSAGES as any).STATUS.WAITINGHOST,
						this.playerDataService.playerName
					);
					this.gamePlayersService.addNewPlayer(
						new Player({ name: data.player })
					);
					this.conn.sendDataClients(ConnDataType.HANDSHAKE, data.player);
					break;
				case ConnDataType.MSG:
					this.conn.sendDataClients(ConnDataType.MSG, data.data, data.player);
					break;
				case ConnDataType.MOVE:
					this.conn.sendDataClients(ConnDataType.MOVE, data.data, data.player);
					this.gamePlayersService.updatePlayerCards(data.data);
					break;
				case ConnDataType.DISCARD:
					this.deckService.discardCard(data.data);
					break;
			}
			this.cd.detectChanges();
		});
	}

	startGame() {
		this.gamePlayersService.startNewGame();
		this.conn.sendDataClients(
			ConnDataType.START,
			this.gamePlayersService.allPlayers
		);

		const first = this.gamePlayersService.selectFirstPlayer();
		this.sendStatusUpdate(
			`${first.name} ${(MESSAGES as any).STATUS.PLAYERSTARTS}`
		);

		this.playerTurn(first);
	}

	playerTurn(player: Player) {
		setTimeout(() => {
			const draw = this.deckService.drawFromDeck(2);
			this.conn.sendDataClients(ConnDataType.TURN, draw, player.name);
			if (player.name === this.playerDataService.playerName) {
				this.playerDataService.addTurnDrawCards(draw);
				this.gamePlayersService.setStatusMessage(
					`${player.name} ${(MESSAGES as any).STATUS.TURNPLAY}`
				);
			} else {
				this.gamePlayersService.setStatusMessage(
					`${player.name} ${(MESSAGES as any).STATUS.ISPLAYING}`
				);
			}
		}, 3000);
	}

	sendStatusUpdate(status: string) {
		this.conn.sendDataClients(ConnDataType.STAUS, status);
		this.gamePlayersService.setStatusMessage(status);
	}
}
