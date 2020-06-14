import { ConnData } from './../classes/conn-data';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Player } from '../classes/player';
import { ActivatedRoute } from '@angular/router';
import { ConnectionService } from '../connection.service';
import { DeckService } from '../services/deck.service';
import { Card } from '../classes/card';
import { ConnDataType } from '../classes/conn-data';

@Component({
	selector: 'app-host',
	templateUrl: './host.component.html',
	styleUrls: ['./host.component.scss'],
})
export class HostComponent implements OnInit {
	public player: Player;
	public roomName: string;
	public actionCard: Card[];

	constructor(
		private route: ActivatedRoute,
		private conn: ConnectionService,
		private cd: ChangeDetectorRef,
		private deckService: DeckService
	) {}

	ngOnInit() {
		this.player = new Player();
		this.route.params.subscribe((params) => {
			this.roomName = params.name;
			this.player.name = params.player;
			// this.hostId = params.hostId;
			this.stablishConnection();
		});

		this.deckService.draw(1).subscribe(
			(draw: Card[]) => {
				this.actionCard = draw;
				this.cd.detectChanges();
			},
			(err) => {
				console.log(err);
			}
		);
	}

	stablishConnection() {
		// HOST
		this.conn.createPeer(this.player.name, this.roomName);
		this.conn.connection$.subscribe((data: ConnData) => {
			switch (data.type) {
				case ConnDataType.HANDSHAKE:
					this.conn.sendDataClients(ConnDataType.HANDSHAKE, data.player);
					break;
				case ConnDataType.MSG:
					this.conn.sendDataClients(ConnDataType.MSG, data.data, data.player);
					break;
			}
		});
	}

	startGame() {
		this.deckService.draw(10).subscribe(
			(draw: Card[]) => {
				this.player.handCards = draw;
				this.conn.sendData(ConnDataType.DEAL, draw);
				this.cd.detectChanges();
			},
			(err) => {
				console.log(err);
			}
		);
	}
}
