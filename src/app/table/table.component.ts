import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ConnectionService } from '../connection.service';
import { DeckService } from '../services/deck.service';
import { Player } from '../classes/player';
import { Card } from '../classes/card';
import { ActivatedRoute } from '@angular/router';
import { ConnDataType } from '../classes/conn-data';

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
	public player: Player;
	public roomName: string;

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
	}

	stablishConnection() {
		// HOST
		this.conn.createPeer(this.player.name, this.roomName);
	}

	startGame() {
		this.deckService.draw(5).subscribe(
			(deck: Card[]) => {
				this.player.handCards = deck;
				this.conn.sendData(ConnDataType.DEAL, deck);
				this.cd.detectChanges();
			},
			(err) => {
				console.log(err);
			}
		);
	}
}
