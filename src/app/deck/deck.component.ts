import { Component, Input } from '@angular/core';
import { DeckService } from '../services/deck.service';
import { Card } from '../classes/card';

@Component({
	selector: 'app-deck',
	templateUrl: './deck.component.html',
	styleUrls: ['./deck.component.scss'],
})
export class DeckComponent {
	@Input() public cards: Card[];
	@Input() public scale = 1;

	constructor(private deckService: DeckService) {}
}
