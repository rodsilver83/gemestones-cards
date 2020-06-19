import { ConnData, ConnDataType } from './../classes/conn-data';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConnectionService } from '../connection.service';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';

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

	ngOnInit() {}

	createRoom() {
		this.room = this.createForm.get('room').value;
		this.player = this.createForm.get('player').value;
		this.connection
			.createPeer('Host', this.room)
			.pipe(take(1))
			.subscribe(
				(id) => {
					if (id === 'joinRoom') {
						this.joinRoom();
					} else {
						this.router.navigate(['host', { name: this.room, player: 'Host' }]);
					}
				},
				(error: any) => {
					this.error = error;
				}
			);
	}

	joinRoom() {
		// Validate if room exist
		this.connection.connection$.subscribe((data: ConnData) => {
			if (data.type === ConnDataType.HANDSHAKE) {
				this.router.navigate([
					'player',
					{
						name: this.room,
						player: this.player,
					},
				]);
			}
		});

		this.connection.createConnection(this.room, this.player);
	}
}
