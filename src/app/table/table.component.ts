import { Component, OnInit } from '@angular/core';
import Peer from 'peerjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  peer2 = new Peer();
  conn2 = null;
  msg: string;

  constructor() { }

  ngOnInit() {

  }

  click() {

    const id = (document.getElementById('key') as HTMLInputElement).value;

    const conn2 = this.peer2.connect(id, {
      reliable: true
    });

    this.peer2.on('open', (id) => {
      console.log('open2:', id);
    });

    this.peer2.on('connection', (id) => {
      console.log('connection:', id);
    });

    this.peer2.on('error', (id) => {
      console.log('error2:', id);
    });

    conn2.on('open', () => {
      console.log('connOpen2:');
      conn2.send(this.msg);
    });

    conn2.on('data', () => {
      console.log('connConnection2:');
    });

    conn2.on('error', (e) => {
      console.log('connError2:', e);
    });
  }

}
