import { Injectable } from '@angular/core';
import Peer from 'peerjs';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  public hostPeer: Peer = null;

  private connection$: Subject<string>;
  private localSessionID: string;
  private hostSessionID: string;

  constructor() {
    this.connection$ = new Subject<string>();
  }

  createHostConnection(): Subject<string> {
    if (!this.hostPeer) {
      this.hostPeer = new Peer(null, {
        host: 'rodrigosoria.me',
        port: 9000,
        path: '/myapp'
      });

      this.hostPeer.on('open', (id) => {
        this.hostSessionID = id;
        this.connection$.next(id);
      });

      this.hostPeer.on('connection', (c) => {
        c.on('data', (data) => {
          // Will print 'hi!'
          console.log('data:', data);
          // document.getElementById('msg').innerHTML = data;
        });
      });

      this.hostPeer.on('error', (err) => {
        console.log('error:', err);
        this.connection$.error(err);
      });
    } else {
      this.connection$.next(this.hostSessionID);
    }

    return this.connection$;
  }

  createLocalConnection(): Subject<string> {
    if (!this.hostPeer) {
      this.hostPeer = new Peer(null, {
        host: 'rodrigosoria.me',
        port: 9000,
        path: '/myapp'
      });

      this.hostPeer.on('open', (id) => {
        this.localSessionID = id;
        this.connection$.next(id);
      });

      this.hostPeer.on('connection', (c) => {
        c.on('data', (data) => {
          // Will print 'hi!'
          console.log('data:', data);
          // document.getElementById('msg').innerHTML = data;
        });
      });

      this.hostPeer.on('error', (err) => {
        console.log('error:', err);
        this.connection$.error(err);
      });
    } else {
      this.connection$.next(this.localSessionID);
    }

    return this.connection$;
  }
}
