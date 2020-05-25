import { Injectable } from '@angular/core';
import Peer from 'peerjs';
import { Subject } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  private peer: Peer = null;
  private peerConnection: any;

  private connection$: Subject<string>;
  private peer$: Subject<string>;
  private sessionId: string;

  constructor() {
    this.connection$ = new Subject<string>();
    this.peer$ = new Subject<string>();
  }

  get connection(): Subject<string> {
    return this.connection$;
  }

  createPeer(): Subject<string> {
    if (!this.peer) {
      this.peer = new Peer(null, {
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
          // Will print 'hi!'
          console.log('dataH:', data);
          this.connection$.next(data);
          // document.getElementById('msg').innerHTML = data;
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

  createConnection(connId: string): Subject<string> {
    this.createPeer().pipe(take(1))
      .subscribe((peerId) => {
        this.peerConnection = this.peer.connect(connId);

        this.peerConnection.on('open', () => {
          // Receive messages
          this.peerConnection.on('data', (data) => {
            console.log('dataP:', data);
            this.connection$.next(data);
          });

          // Send messages
          this.peerConnection.send('Hello!');
        });
      });
    return this.connection$;
  }

  sendMessage(msg: string) {
    if (this.peerConnection) {
      this.peerConnection.send(msg);
    }
  }

}
