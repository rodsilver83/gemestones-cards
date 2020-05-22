import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../card/card.component';

export class ActionCard extends Card {
  public title = '';
  public icon = '';
  public iconColor = '';
  public small = false;

  constructor(...args: {
    bgColor: string;
    value: number;
    desc: string;
    icon?: string,
    iconColor?: string,
    title?: string,
    small?: boolean
  }[]) {
    super(...args);
    Object.assign(this, ...args);
  }

  get type() {
    return 'ACTION';
  }
}

@Component({
  selector: 'app-action-card',
  templateUrl: './action-card.component.html',
  styleUrls: ['./action-card.component.scss']
})
export class ActionCardComponent implements OnInit {


  @Input() public config: ActionCard;

  constructor() { }

  ngOnInit() {
  }

}
