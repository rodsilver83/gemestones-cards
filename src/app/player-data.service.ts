import { Card } from './classes/card';
import { BehaviorSubject } from 'rxjs';
import { Player } from './classes/player';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class PlayerDataService {
	private player: Player;

	public handCards: BehaviorSubject<Card[]> = new BehaviorSubject([]);
	public bankCards: BehaviorSubject<Card[]> = new BehaviorSubject([]);
	public playCards: BehaviorSubject<Card[]> = new BehaviorSubject([]);

	set playerCards(player: Player) {
		this.player = player;
		this.handCards.next(player.handCards);
		this.bankCards.next(player.bankCards);
		this.playCards.next(player.playCards);
	}

	constructor() {}

	moveMoney(id: number) {
		const index = this.player.handCards.findIndex((card: Card) => {
			return card.id === id;
		});
		const moneyCard = this.player.handCards.splice(index, 1)[0];
		this.player.bankCards.push(moneyCard);

		this.playerCards = this.player;
	}

	moveTable(id: number) {
		const index = this.player.handCards.findIndex((card: Card) => {
			return card.id === id;
		});
		const playCard = this.player.handCards.splice(index, 1)[0];
		this.player.playCards.push(playCard);

		this.playerCards = this.player;
	}
}
