import { Component, OnInit, OnDestroy } from '@angular/core';
import Peer from 'peerjs';
import { ActivatedRoute, RouterOutlet, Params } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnDestroy {

  peer2 = new Peer();
  conn2 = null;
  msg: string;

  // private routeParams$: Observable<Params>;

  constructor(
    private route: ActivatedRoute,
    private outlet: RouterOutlet
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
      // In a real app: dispatch action to load the details here.
    });
  }

  ngOnDestroy() {
    // this.routeParams$.unsubscribe();
  }

}
