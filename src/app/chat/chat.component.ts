import { CardColorsService } from './../services/card-colors.service';
import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { FormControl } from '@angular/forms';
import { ConnectionService } from '../connection.service';
import { ConnData, ConnDataType } from '../classes/conn-data';

class Message {
	player: string;
	text: string;
	bgColor? = '#3298dc';
}

@Component({
	selector: 'app-chat',
	templateUrl: './chat.component.html',
	styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
	@Input() public playerName: string;
	@Input() public roomName: string;

	public sendMsg = new FormControl('');
	public messages$: Subject<Message[]>;

	private messages: Message[] = [];
	private playersColors = {};

	constructor(
		private conn: ConnectionService,
		private cd: ChangeDetectorRef,
		private colorService: CardColorsService
	) {}

	ngOnInit(): void {
		this.messages$ = new Subject<Message[]>();
		this.stablishConnection();
	}

	stablishConnection() {
		this.conn.connection$.subscribe(
			(data: ConnData) => {
				let color = '#3298dc'; // Default
				switch (data.type) {
					case ConnDataType.MSG:
						color = this.addPlayerColor(data.player);
						this.updateMsg({
							player: data.player,
							text: data.data,
							bgColor: color,
						});
						break;
					case ConnDataType.HANDSHAKE:
						color = this.addPlayerColor(data.data);
						this.updateMsg({
							player: data.data,
							text: 'Joined!',
							bgColor: color,
						});
						break;
				}
			},
			(err) => {
				console.log(err);
			}
		);
	}

	addPlayerColor(player: string): string {
		if (player === 'Host') {
			return '#3298dc';
		}
		if (!this.playersColors[player]) {
			const set = Object.keys(this.playersColors).length + 3;
			const color = this.colorService.getColor(set);
			this.playersColors[player] = color;
			return color;
		} else {
			return this.playersColors[player];
		}
	}

	updateMsg(msg: Message) {
		this.messages.push(msg);
		this.messages$.next(this.messages);
		this.cd.detectChanges();
	}

	send() {
		const msg = this.sendMsg.value;
		this.conn.sendMessage(msg);

		if (this.playerName === 'Host') {
			this.updateMsg({
				player: this.playerName,
				text: msg,
			});
		}

		this.sendMsg.reset();
	}
}
