import { Component, OnInit } from '@angular/core';
import { Card } from '../card/card.component';
import { Rent } from '../property-card/property-card.component';

export class PropertyWild {
  public name = '';
  public color = '';
  public textColor = '';
  public rent = Array<Rent>();
}

export class PropertyWildCard extends Card {
  public propertyA: PropertyWild;
  public propertyB: PropertyWild;

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
  selector: 'app-property-wild-card',
  templateUrl: './property-wild-card.component.html',
  styleUrls: ['./property-wild-card.component.scss']
})
export class PropertyWildCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
