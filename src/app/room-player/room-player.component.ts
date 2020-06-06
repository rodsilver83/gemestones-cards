import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConnectionService } from '../connection.service';
import { DeckService } from '../services/deck.service';
import { Subject } from 'rxjs';
import { Player } from '../classes/player';
import { FormControl } from '@angular/forms';
import { ConnData } from '../classes/conn-data';

@Component({
  selector: 'app-room-player',
  templateUrl: './room-player.component.html',
  styleUrls: ['./room-player.component.scss']
})
export class RoomPlayerComponent implements OnInit {

  public sendMsg = new FormControl('');
  public messages$: Subject<string[]>;
  public roomName: string;
  public player: Player;

  private messages: string[] = [];
  private hostId: string;

  constructor(
    private route: ActivatedRoute,
    private conn: ConnectionService,
    private cd: ChangeDetectorRef,
    private deckService: DeckService
  ) { }

  ngOnInit() {
    this.messages$ = new Subject<string[]>();

    this.route.params.subscribe(params => {
      this.roomName = params.name;
      this.hostId = params.hostId;
      this.stablishConnection();
    });

    this.player = new Player();
  }

  stablishConnection() {
    // PLAYER
    this.conn.createConnection(this.roomName)
      .subscribe((data: ConnData) => {
        this.handleConnData(data);
      },
        err => {
          console.log(err);
        });
  }

  handleConnData(connData: ConnData) {
    switch (connData.type) {
      case 'MSG':
        this.updateMsg(`Recived: ${connData.data}`);
        break;
      case 'DEALCARDS':
        this.player.handCards = connData.data;
        break;
    }
    this.cd.detectChanges();
  }

  updateMsg(msg: string) {
    this.messages.push(msg);
    this.messages$.next(this.messages);
  }

  send() {
    const msg = this.sendMsg.value;
    this.updateMsg(`Send: ${msg}`);
    this.conn.sendMessage(msg);
    this.sendMsg.reset();
  }

}
