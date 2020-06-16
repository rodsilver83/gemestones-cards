import { Component, Input } from '@angular/core';
import { DeckService } from '../services/deck.service';
import { Card } from '../classes/card';

@Component({
	selector: 'mc-deck-card',
	templateUrl: './deck-card.component.html',
	styleUrls: ['./deck-card.component.scss'],
})
export class DeckCardComponent {
	@Input() public scale = 1;
	@Input() public card: Card;

	constructor(private deckService: DeckService) {}
}
