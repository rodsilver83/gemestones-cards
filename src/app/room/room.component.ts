import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { ConnectionService } from '../connection.service';
import { Subject } from 'rxjs';
import { DeckService } from '../services/deck.service';
import { Player } from '../classes/player';
import { Card } from '../classes/card';
import { ConnData } from '../classes/conn-data';

@Component({
  selector: 'app-table',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

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
      // this.hostId = params.hostId;
      this.stablishConnection();
    });

    this.player = new Player();
  }

  stablishConnection() {
    // HOST
    this.conn.createPeer(this.roomName);

    this.conn.connection$
      .subscribe((data: ConnData) => {
        this.updateMsg(`Recieved: ${data.data}`);
      },
        err => {
          console.log(err);
        });
  }

  updateMsg(msg: string) {
    this.messages.push(msg);
    this.messages$.next(this.messages);
    this.cd.detectChanges();
  }

  send() {
    const msg = this.sendMsg.value;
    this.updateMsg(`Send: ${msg}`);
    this.conn.sendMessage(msg);
    this.sendMsg.reset();
  }

  startGame() {
    this.deckService.draw(5).subscribe((deck: Card[]) => {
      this.player.handCards = deck;
      this.conn.sendData('DEALCARDS', deck);
      this.cd.detectChanges();
    },
      err => {
        console.log(err);
      });
  }

}
