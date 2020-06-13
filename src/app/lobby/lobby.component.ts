import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConnectionService } from '../connection.service';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
	selector: 'app-lobby',
	templateUrl: './lobby.component.html',
	styleUrls: ['./lobby.component.scss'],
})
export class LobbyComponent implements OnInit {
	public connId: string;
	public id = new FormControl('');
	public error = null;
	public joinForm = new FormGroup({
		joinName: new FormControl('', Validators.required),
		playerName: new FormControl('', Validators.required),
	});

	public createForm = new FormGroup({
		room: new FormControl('', Validators.required),
	});

	private rooms$: AngularFireList<any>;

	constructor(
		private connection: ConnectionService,
		private fireBase: AngularFireDatabase,
		private router: Router
	) {}

	ngOnInit() {
		this.rooms$ = this.fireBase.list('/Rooms');
	}

	createRoom() {
		this.connection
			.createPeer()
			.pipe(take(1))
			.subscribe(
				(id) => {
					this.rooms$.push({
						name: this.createForm.get('room').value,
						host: id,
					});
					this.router.navigate([
						'table',
						{ name: this.createForm.get('room').value, player: 'Host' },
					]);
				},
				(error: any) => {
					this.error = error;
				}
			);
	}

	joinRoom() {
		const query = this.fireBase
			.list('/Rooms', (ref) =>
				ref
					.limitToFirst(1)
					.orderByChild('name')
					.equalTo(this.joinForm.get('joinName').value)
			)
			.valueChanges();
		query.subscribe((res: any) => {
			if (res[0] && res[0].host) {
				this.router.navigate([
					'roomPlayer',
					{
						name: this.joinForm.get('joinName').value,
						hostId: res[0].host,
						player: this.joinForm.get('playerName').value,
					},
				]);
			} else {
				this.error = 'Room not found, try again.';
			}
		});
	}
}
