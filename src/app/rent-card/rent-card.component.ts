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
        rgba(219, 0, 0, 1) 0%,
        rgba(219, 0, 0, 1) 15%,
        rgba(255, 246, 0, 1) 16%,
        rgba(255, 246, 0, 1) 29%,
        rgba(9, 196, 0, 1) 30%,
        rgba(9, 196, 0, 1) 42%,
        rgba(0, 255, 250, 1) 42%,
        rgba(0, 255, 250, 1) 54%,
        rgba(0, 21, 255, 1) 55%,
        rgba(0, 21, 255, 1) 69%,
        rgba(246, 0, 255, 1) 70%,
        rgba(246, 0, 255, 1) 84%,
        rgba(0, 0, 0, 1) 85%,
        rgba(0, 0, 0, 1) 100%
        )`);
    }
  }

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

}
