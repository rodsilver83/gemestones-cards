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

	constructor(private conn: ConnectionService, private cd: ChangeDetectorRef) {}

	ngOnInit(): void {
		this.messages$ = new Subject<Message[]>();
		this.stablishConnection();
	}

	stablishConnection() {
		this.conn.connection$.subscribe(
			(data: ConnData) => {
				switch (data.type) {
					case ConnDataType.MSG:
						this.updateMsg({
							player: data.player,
							text: data.data,
						});
						break;
					case ConnDataType.HANDSHAKE:
						this.updateMsg({
							player: data.data,
							text: 'Joined!',
						});
						break;
				}
			},
			(err) => {
				console.log(err);
			}
		);
	}

	updateMsg(msg: Message) {
		this.messages.push(msg);
		this.messages$.next(this.messages);
		this.cd.detectChanges();
	}

	send() {
		const msg = this.sendMsg.value;
		this.conn.sendMessage(msg);
		this.sendMsg.reset();
	}
}
