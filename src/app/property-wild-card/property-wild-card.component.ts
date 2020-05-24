import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../card/card.component';
import { Rent } from '../property-card/property-card.component';
import { CardColorsService } from '../services/card-colors.service';

export class PropertyWild {
  public name = '';
  public color = '';
  public set = 0;
  public textColor = '';
  public rents = Array<Rent>();
}

export class PropertyWildCard extends Card {
  public propertyA: PropertyWild;
  public propertyB: PropertyWild;

  constructor(...args: {
    value: number;
    bgColor: string;
    desc: string,
    propertyA: PropertyWild,
    propertyB: PropertyWild
  }[]) {
    super(...args);
    Object.assign(this, ...args);
  }

  get type() {
    return 'PROPERTYWILD';
  }
}

@Component({
  selector: 'app-property-wild-card',
  templateUrl: './property-wild-card.component.html',
  styleUrls: ['./property-wild-card.component.scss']
})
export class PropertyWildCardComponent implements OnInit {

  @Input() public config: PropertyWildCard;

  constructor(private cardColor: CardColorsService) { }

  bgColor(property) {
    if (property) {
      return this.cardColor.getColor(property.set);
    }
    return '';
  }

  ngOnInit() {
  }

}
