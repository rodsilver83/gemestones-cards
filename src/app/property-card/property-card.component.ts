import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../card/card.component';
import { CardColorsService } from '../services/card-colors.service';

export class Rent {
  public houses = 0;
  public amount = 0;
}

export class PropertyCard extends Card {
  public name = '';
  public color = '';
  public textColor = '';
  public set = 0;
  public rents = Array<Rent>();

  constructor(...args: {
    color: string,
    bgColor: string;
    value: number;
    icon?: string,
    set?: number,
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

  get bgColor() {
    return this.cardColor.getColor(this.config.set);
  }

  constructor(private cardColor: CardColorsService) { }

  ngOnInit() {
  }

}
