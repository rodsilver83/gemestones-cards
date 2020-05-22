import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../card/card.component';

export class MoneyCard extends Card {
  constructor(...args: { value: number, bgColor: string, desc: string }[]) {
    super(...args);
  }

  get type() {
    return 'MONEY';
  }
}

@Component({
  selector: 'app-money-card',
  templateUrl: './money-card.component.html',
  styleUrls: ['./money-card.component.scss']
})
export class MoneyCardComponent implements OnInit {

  @Input() public config: MoneyCard;

  constructor() { }

  ngOnInit() {
  }

}
