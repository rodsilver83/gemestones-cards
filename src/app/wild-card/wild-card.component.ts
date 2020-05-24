import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../card/card.component';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { CardColorsService } from '../services/card-colors.service';

export class WildCard extends Card {
  public title = '';
  constructor(...args: { value: number, desc: string, bgColor: string, title: string }[]) {
    super(...args);
    Object.assign(this, ...args);
  }

  get type() {
    return 'WILDCARD';
  }
}

@Component({
  selector: 'app-wild-card',
  templateUrl: './wild-card.component.html',
  styleUrls: ['./wild-card.component.scss']
})
export class WildCardComponent implements OnInit {

  @Input() public config: WildCard;

  public rainbowBg: SafeStyle;

  constructor(private sanitizer: DomSanitizer, private cardColor: CardColorsService) { }

  ngOnInit() {
    this.rainbowBg = this.cardColor.getRainbowLinearGradient('right');
  }

}
