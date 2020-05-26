import { Injectable } from '@angular/core';
import Peer from 'peerjs';
import { Subject } from 'rxjs';
import { take } from 'rxjs/operators';
import { ConnData } from './classes/conn-data';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  public connection$: Subject<ConnData>;

  private peerConnection: any;
  private peer: Peer = null;
  private peer$: Subject<string>;
  private sessionId: string;

  constructor() {
    this.connection$ = new Subject<ConnData>();
    this.peer$ = new Subject<string>();
  }

  createPeer(peerId = null): Subject<string> {
    if (!this.peer) {
      this.peer = new Peer(peerId, {
        host: 'rodrigosoria.me',
        port: 9000,
        path: '/myapp'
      });

      this.peer.on('open', (id) => {
        this.sessionId = id;
        this.peer$.next(id);
      });

      this.peer.on('connection', (conn) => {
        this.peerConnection = conn;
        this.peerConnection.on('data', (data) => {
          this.connection$.next(data);
        });

        this.peerConnection.send('Que hace!');
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

  createConnection(connId: string): Subject<ConnData> {
    this.createPeer().pipe(take(1))
      .subscribe((peerId) => {
        this.peerConnection = this.peer.connect(connId);

        this.peerConnection.on('open', () => {
          this.peerConnection.on('data', (data) => {
            this.connection$.next(data);
          });

          this.sendMessage('Player Joined!');
        });
      });
    return this.connection$;
  }

  sendMessage(msg: string) {
    if (this.peerConnection) {
      const data: ConnData = {
        type: 'MSG',
        data: msg
      };
      this.peerConnection.send(data);
    }
  }

  sendData(connType: string, connData: any) {
    if (this.peerConnection) {
      const dataC: ConnData = {
        type: connType,
        data: connData
      };
      this.peerConnection.send(dataC);
    }
  }

}
