import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../card/card.component';
import { DomSanitizer } from '@angular/platform-browser';
import { CardColorsService } from '../card-colors.service';

export class RentCard extends Card {
  public rentColors: string[];
  public wild: boolean;
  constructor(...args: { value: number, bgColor: string, desc: string, rentColors?: string[], wild: boolean }[]) {
    super(...args);
  }

  get type() {
    return 'RENT';
  }
}

@Component({
  selector: 'app-rent-card',
  templateUrl: './rent-card.component.html',
  styleUrls: ['./rent-card.component.scss']
})
export class RentCardComponent implements OnInit {

  @Input() public config: RentCard;

  get backgroundColor() {
    if (!this.config.wild) {
      return this.sanitizer.bypassSecurityTrustStyle(`linear-gradient(to bottom,
      ${this.config.rentColors[0]} 0%,
      ${this.config.rentColors[0]} 50%,
      ${this.config.rentColors[1]} 50%,
      ${this.config.rentColors[1]} 100%)`);
    } else {
      return this.cardColor.getRainbowLinearGradient('bottom');
    }
  }

  constructor(private sanitizer: DomSanitizer, private cardColor: CardColorsService) { }

  ngOnInit() {
  }

}
