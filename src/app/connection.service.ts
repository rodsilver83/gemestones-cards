import { Injectable } from '@angular/core';
import Peer, { DataConnection } from 'peerjs';
import { Subject } from 'rxjs';
import { take } from 'rxjs/operators';
import { ConnData, ConnDataType } from './classes/conn-data';

@Injectable({
	providedIn: 'root',
})
export class ConnectionService {
	public connection$: Subject<ConnData>;

	private peerConnections: DataConnection[] = [];
	private clientConnection: DataConnection;
	private peer: Peer = null;
	private peer$: Subject<string>;
	private sessionId: string;
	private playerName: string;

	constructor() {
		this.connection$ = new Subject<ConnData>();
		this.peer$ = new Subject<string>();
	}

	// HOST
	createPeer(player: string, peerId = null): Subject<string> {
		this.playerName = player;
		if (!this.peer) {
			this.peer = new Peer(peerId, {
				host: 'rodrigosoria.me',
				port: 9000,
				path: '/myapp',
			});

			this.peer.on('open', (id) => {
				this.sessionId = id;
				this.peer$.next(id);
			});

			this.peer.on('connection', (conn) => {
				this.peerConnections.push(conn);
				conn.on('data', (data) => {
					this.connection$.next(data);
				});
			});

			this.peer.on('error', (err) => {
				console.log('error:', err);
				this.peer$.error(err);
			});
		} else {
			this.peer$.next(this.sessionId);
		}

		return this.peer$;
	}

	// CLIENT
	createConnection(connId: string, player: string): Subject<ConnData> {
		this.createPeer(player)
			.pipe(take(1))
			.subscribe((peerId) => {
				this.clientConnection = this.peer.connect(connId);

				this.clientConnection.on('open', () => {
					this.clientConnection.on('data', (data) => {
						this.connection$.next(data);
					});

					this.sendData(ConnDataType.HANDSHAKE, player);
				});

				this.clientConnection.on('error', (err) => {
					console.log('error:', err);
					this.connection$.error(err);
				});
			});
		return this.connection$;
	}

	// Chat use only
	sendMessage(msg: string) {
		const data: ConnData = {
			peer: this.sessionId,
			type: ConnDataType.MSG,
			data: msg,
			player: this.playerName,
		};
		if (this.peerConnections.length > 0) {
			this.peerConnections.forEach((conn) => {
				conn.send(data);
			});
		} else {
			if (this.clientConnection) {
				this.clientConnection.send(data);
			}
		}
	}

	sendData(connType: ConnDataType, connData: any) {
		if (this.clientConnection) {
			const dataC: ConnData = {
				peer: this.sessionId,
				type: connType,
				data: connData,
				player: this.playerName,
			};
			this.clientConnection.send(dataC);
		}
	}

	sendDataClients(
		connType: ConnDataType,
		connData: any,
		player = this.playerName
	) {
		if (this.peerConnections.length > 0) {
			const dataC: ConnData = {
				peer: this.sessionId,
				type: connType,
				data: connData,
				player: player,
			};
			this.peerConnections.forEach((conn) => {
				conn.send(dataC);
			});
		}
	}
}
