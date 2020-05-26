import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../classes/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() public config: Card;
  @Input() public valueRotate = false;

  constructor() { }

  ngOnInit() {
  }

}
