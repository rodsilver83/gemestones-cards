import { Player } from './../classes/player';
import { ConnData } from './../classes/conn-data';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConnectionService } from '../connection.service';
import { DeckService } from '../services/deck.service';
import { Card } from '../classes/card';
import { ConnDataType } from '../classes/conn-data';
import { take } from 'rxjs/operators';

@Component({
	selector: 'mc-host',
	templateUrl: './host.component.html',
	styleUrls: ['./host.component.scss'],
})
export class HostComponent implements OnInit {
	public player: Player;
	public roomName: string;
	public actionCard: Card;
	public statusMsg = 'Shuffling  Cards...';
	public deckReady = false;

	private players = new Map<string, Player>();

	get otherPlayers(): Player[] {
		const players = [];
		this.players.forEach((v, k) => {
			if (k !== this.player.name) {
				players.push(v);
			}
		});
		return players;
	}

	constructor(
		private route: ActivatedRoute,
		private conn: ConnectionService,
		private cd: ChangeDetectorRef,
		private deckService: DeckService
	) {}

	ngOnInit() {
		this.player = new Player({ name: 'Host' });
		this.players.set(this.player.name, this.player);

		this.route.params.subscribe((params) => {
			this.roomName = params.name;
			// this.player.name = params.player;
			// this.hostId = params.hostId;
			this.stablishConnection();
		});

		this.deckService.deckCards$.pipe(take(1)).subscribe((ready) => {
			this.statusMsg = 'Waiting for Host to start the game.';
			this.deckReady = ready;
			this.drawCard(); // Test
			this.startGame(); // just to test
		});
		this.deckService.getDeck();
	}

	drawCard() {
		const card = this.deckService.drawFromDeck(1);
		this.actionCard = card[0];
		this.cd.detectChanges();
	}

	stablishConnection() {
		// HOST
		this.conn
			.createPeer(this.player.name, this.roomName)
			.pipe(take(1))
			.subscribe(() => {});

		this.conn.connection$.subscribe((data: ConnData) => {
			switch (data.type) {
				case ConnDataType.HANDSHAKE:
					this.conn.sendDataClients(ConnDataType.HANDSHAKE, data.player);
					this.conn.sendDataClients(
						ConnDataType.STAUS,
						'Waiting for HOST to start the Game.',
						this.player.name
					);
					this.players.set(data.player, new Player({ name: data.player }));
					break;
				case ConnDataType.MSG:
					this.conn.sendDataClients(ConnDataType.MSG, data.data, data.player);
					break;
			}
		});
	}

	startGame() {
		this.players.forEach((player: Player) => {
			this.drawCards(player);
		});
		this.cd.detectChanges();
	}

	drawCards(player: Player) {
		const cards = this.deckService.drawFromDeck(5);
		const play = this.deckService.drawFromDeck(1);
		player.handCards = cards;
		player.playCards = play;
		this.conn.sendDataClients(ConnDataType.DEAL, player);
	}
}
