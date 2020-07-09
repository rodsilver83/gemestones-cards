import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { ConnectionService } from 'src/app/services/connection.service';
import { CardColorsService } from 'src/app/services/card-colors.service';
import { PlayerDataService } from 'src/app/services/player-data.service';
import { ConnData, ConnDataType } from 'src/app/classes/conn-data';

class Message {
	player: string;
	text: string;
	bgColor? = '#3298dc';
}

@Component({
	selector: 'mc-chat',
	templateUrl: './chat.component.html',
	styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
	@Input() public roomName: string;

	public sendMsg = new FormControl('');
	public messages$: Subject<Message[]>;

	private messages: Message[] = [];
	private playersColors = new Map<string, string>();

	constructor(
		private conn: ConnectionService,
		private cd: ChangeDetectorRef,
		private colorService: CardColorsService,
		private playerDataService: PlayerDataService
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
		if (!this.playersColors.has(player)) {
			const set = this.playersColors.size + 3;
			const color = this.colorService.getColor(set);
			this.playersColors.set(player, color);
			return color;
		} else {
			return this.playersColors.get(player);
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

		if (this.playerDataService.playerName === 'Host') {
			this.updateMsg({
				player: this.playerDataService.playerName,
				text: msg,
			});
		}

		this.sendMsg.reset();
	}
}
