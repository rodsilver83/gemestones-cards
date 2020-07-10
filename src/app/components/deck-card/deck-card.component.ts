import { Component, Input, ElementRef, HostBinding } from '@angular/core';
import { DeckService } from '../../services/deck.service';
import { Card } from '../../classes/card';

@Component({
	selector: 'gs-deck-card',
	templateUrl: './deck-card.component.html',
	styleUrls: ['./deck-card.component.scss'],
})
export class DeckCardComponent {
	@Input() public config: Card;

	constructor(private deckService: DeckService, public el: ElementRef) {}
}
