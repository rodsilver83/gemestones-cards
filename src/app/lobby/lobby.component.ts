import { Component, OnInit } from '@angular/core';
import Peer from 'peerjs';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent implements OnInit {

  connId: string;

  constructor() { }

  ngOnInit() {
    const peer = new Peer();

    peer.on('open', (id) => {
      this.connId = id;
    });

    peer.on('connection', (c) => {
      c.on('data', (data) => {
        // Will print 'hi!'
        // console.log(data);
        document.getElementById('msg').innerHTML = data;
      });
    });

    peer.on('error', (id) => {
      console.log('error:', id);
    });

  }

}
