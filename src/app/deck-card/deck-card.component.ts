import { Component, Input, ElementRef } from '@angular/core';
import { DeckService } from '../services/deck.service';
import { Card } from '../classes/card';

@Component({
	selector: 'mc-deck-card',
	templateUrl: './deck-card.component.html',
	styleUrls: ['./deck-card.component.scss'],
})
export class DeckCardComponent {
	@Input() public card: Card;

	constructor(private deckService: DeckService, public el: ElementRef) {}
}
