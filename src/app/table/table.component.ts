import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet, Params } from '@angular/router';
import { FormControl } from '@angular/forms';
import { ConnectionService } from '../connection.service';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  public sendMsg = new FormControl('');
  public messages$: Observable<string[]>;
  public isHost: boolean;

  private messages: string[] = [];
  private hostId: string;
  public roomName: string;

  constructor(
    private route: ActivatedRoute,
    private conn: ConnectionService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.roomName = params.name;
      this.isHost = (params.host === 'true');
      this.hostId = params.hostId;
      this.stablishConnection();
    });
  }

  stablishConnection() {
    if (this.isHost) {
      this.messages$ = new Observable<string[]>((observer: Observer<string[]>) => {
        this.conn.connection
          .subscribe((msg: string) => {
            this.messages.push(`Recieved: ${msg}`);
            observer.next(this.messages);
          },
            err => {
              console.log(err);
            });
      });
    } else {
      this.messages$ = new Observable<string[]>((observer: Observer<string[]>) => {
        this.conn.createConnection(this.hostId)
          .subscribe((msg: string) => {
            this.messages.push(`Recieved: ${msg}`);
            observer.next(this.messages);
          },
            err => {
              console.log(err);
            });
      });

    }
  }

  send() {
    const msg = this.sendMsg.value;
    this.messages.push(`Send: ${msg}`);
    this.conn.sendMessage(msg);
    this.sendMsg.reset();
  }

}
