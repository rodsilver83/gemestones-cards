import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Player } from 'src/app/classes/player';
import { ActivatedRoute } from '@angular/router';
import { ConnectionService } from 'src/app/services/connection.service';
import { DeckService } from 'src/app/services/deck.service';
import { PlayerDataService } from 'src/app/services/player-data.service';
import { GamePlayersService } from 'src/app/services/game-players.service';
import { take } from 'rxjs/operators';
import { ConnData, ConnDataType } from 'src/app/classes/conn-data';

@Component({
	selector: 'mc-host',
	templateUrl: './host.component.html',
	styleUrls: ['./host.component.scss'],
})
export class HostComponent implements OnInit {
	public player: Player;
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
			'Waiting for Host to start the game.'
		);
		this.gamePlayersService.addNewLocalPlayer('Host');

		this.route.params.subscribe((params) => {
			this.roomName = params.name;
			// this.player.name = params.player;
			// this.hostId = params.hostId;
			this.stablishConnection();
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
					this.conn.sendDataClients(ConnDataType.HANDSHAKE, data.player);
					this.conn.sendDataClients(
						ConnDataType.STAUS,
						'Waiting for HOST to start the Game.',
						this.playerDataService.playerName
					);
					this.gamePlayersService.addNewPlayer(data.player);
					this.startGame(); // For Test Only
					break;
				case ConnDataType.MSG:
					this.conn.sendDataClients(ConnDataType.MSG, data.data, data.player);
					break;
			}
		});
	}

	startGame() {
		this.gamePlayersService.startNewGame();
		this.gamePlayersService.allPlayers.forEach((player: Player) => {
			this.conn.sendDataClients(ConnDataType.DEAL, player);
		});
	}
}
