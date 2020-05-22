import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../card/card.component';

class Rent {
  public houses = 0;
  public amount = 0;
}

export class PropertyCard extends Card {
  public name = '';
  public icon = '';
  public iconColor = '';
  public color = '';
  public textColor = '';
  public rents = Array<Rent>();

  constructor(...args: {
    color: string,
    bgColor: string;
    value: number;
    icon?: string,
    iconColor?: string,
    name: string,
    textColor?: string,
    desc: string,
    rents: Array<Rent>
  }[]) {
    super(...args);
    Object.assign(this, ...args);
  }

  get type() {
    return 'PROPERTY';
  }
}

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss']
})
export class PropertyCardComponent implements OnInit {

  @Input() public config: PropertyCard;

  constructor() { }

  ngOnInit() {
  }

}
