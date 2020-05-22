import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../card/card.component';

export class WildCard extends Card {
  public title = '';
  constructor(...args: { value: number, desc: string, bgColor: string, title: string }[]) {
    super(...args);
    Object.assign(this, ...args);
  }

  get type() {
    return 'WILDCARD';
  }
}

@Component({
  selector: 'app-wild-card',
  templateUrl: './wild-card.component.html',
  styleUrls: ['./wild-card.component.scss']
})
export class WildCardComponent implements OnInit {

  @Input() public config: Card;

  constructor() { }

  ngOnInit() {
  }

}
