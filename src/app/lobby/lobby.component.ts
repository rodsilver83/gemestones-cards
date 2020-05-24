import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl } from '@angular/forms';
import { ConnectionService } from '../connection.service';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent implements OnInit {

  public connId: string;
  public room = new FormControl('');
  public joinName = new FormControl('');
  public id = new FormControl('');
  public error = null;
  private rooms$: AngularFireList<any>;

  constructor(
    private connection: ConnectionService,
    private fireBase: AngularFireDatabase,
    private router: Router) { }

  ngOnInit() {
    this.rooms$ = this.fireBase.list('/Rooms');
  }

  createRoom() {
    this.connection.createHostConnection().pipe(take(1))
      .subscribe((id) => {
        this.rooms$.push({
          name: this.room.value,
          host: id
        });
        this.router.navigate(['table', { host: true, name: this.room.value }]);
      });
  }

  joinRoom() {
    const query = this.fireBase.list('/Rooms',
      ref => ref.limitToFirst(1).orderByChild('name')
        .equalTo(this.joinName.value))
      .valueChanges();
    query.subscribe(res => {
      this.router.navigate(['table', { host: false, name: this.joinName.value }]);
    });
  }
}
