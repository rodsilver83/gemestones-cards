import { Component, OnInit, Input } from '@angular/core';
import { CardColorsService } from '../services/card-colors.service';
import { PropertyCard } from '../classes/property-card';

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
