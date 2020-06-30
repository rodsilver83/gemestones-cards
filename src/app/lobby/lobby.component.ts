import { ConnData, ConnDataType } from './../classes/conn-data';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConnectionService } from '../connection.service';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { watch } from 'rxjs-watcher';

@Component({
	selector: 'mc-lobby',
	templateUrl: './lobby.component.html',
	styleUrls: ['./lobby.component.scss'],
})
export class LobbyComponent implements OnInit {
	public room: string;
	public player: string;
	public id = new FormControl('');
	public error = null;

	public createForm = new FormGroup({
		room: new FormControl('', Validators.required),
		player: new FormControl('', Validators.required),
	});

	constructor(private connection: ConnectionService, private router: Router) {}

	ngOnInit() {
		console.log(this.createForm);
	}

	createRoom() {
		this.room = this.createForm.get('room').value;
		this.player = this.createForm.get('player').value;
		this.connection
			.createPeer('Host', this.room)
			.pipe(take(1), watch('Create Room', 10))
			.subscribe((res) => {
				if (res === 'unavailable-id') {
					this.joinRoom();
				} else {
					if (res === this.room) {
						this.router.navigate(['host', { name: this.room, player: 'Host' }]);
					} else {
						this.error = res;
					}
				}
			});
	}

	joinRoom() {
		// Validate if room exist
		this.connection
			.createConnection(this.room, this.player)
			.subscribe((res: ConnData) => {
				switch (res.type) {
					case ConnDataType.HANDSHAKE:
						this.router.navigate([
							'player',
							{
								name: this.room,
								player: this.player,
							},
						]);
						break;
					case ConnDataType.ERROR:
						this.error = res.data;
						break;
				}
			});
	}
}
