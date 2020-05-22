import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../card/card.component';
import { DomSanitizer } from '@angular/platform-browser';

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
      return this.sanitizer.bypassSecurityTrustStyle(`linear-gradient(to bottom,
        #955336 0%,
        #955336 10%,
        #aae0f9 10%,
        #aae0f9 20%,
        #d73995 20%,
        #d73995 30%,
        #f7931e 30%,
        #f7931e 40%,
        #ee1d23 40%,
        #ee1d23 50%,
        #fff100 50%,
        #fff100 60%,
        #30b45b 60%,
        #30b45b 70%,
        #0072bb 70%,
        #0072bb 80%,
        #cde7d0 80%,
        #cde7d0 90%,
        #231f20 90%,
        #231f20 100%
        )`);
    }
  }

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

}
