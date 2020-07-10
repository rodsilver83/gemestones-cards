import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { CardColorsService } from '../../../services/card-colors.service';
import { WildCard } from '../../../classes/wild-card';

@Component({
	selector: 'gs-wild-card',
	templateUrl: './wild-card.component.html',
	styleUrls: ['./wild-card.component.scss'],
})
export class WildCardComponent implements OnInit {
	@Input() public config: WildCard;

	public rainbowBg: SafeStyle;

	constructor(
		private sanitizer: DomSanitizer,
		private cardColor: CardColorsService
	) {}

	ngOnInit() {
		this.rainbowBg = this.cardColor.getRainbowLinearGradient('right');
	}
}
