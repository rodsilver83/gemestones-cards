import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../classes/card';

export class MoneyCard extends Card {
  public type = 'MONEY';
  constructor(...args: { value: number, bgColor: string, desc: string }[]) {
    super(...args);
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
