import { DeckService } from './deck.service';
import { Card } from '../classes/card';
import { BehaviorSubject } from 'rxjs';
import { Player } from '../classes/player';
import { Injectable } from '@angular/core';
import { transferArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';

@Injectable({
	providedIn: 'root',
})
export class PlayerDataService {
	private player: Player;

	public readonly handCards$: BehaviorSubject<Card[]> = new BehaviorSubject([]);
	public readonly bankCards$: BehaviorSubject<Card[]> = new BehaviorSubject([]);
	public readonly playCards$: BehaviorSubject<Card[]> = new BehaviorSubject([]);
	public readonly sets$: BehaviorSubject<Card[][]> = new BehaviorSubject([]);

	set playerCards(player: Player) {
		this.player = player;
		this.handCards$.next(player.handCards);
		this.bankCards$.next(player.bankCards);
		this.playCards$.next(player.playCards);
		this.sets$.next(player.sets);
	}

	get playerName(): string {
		return this.player?.name;
	}

	constructor(private deckService: DeckService) {}

	moveMoney(id: number) {
		const index = this.player.handCards.findIndex((card: Card) => {
			return card.id === id;
		});

		transferArrayItem(
			this.player.handCards,
			this.player.bankCards,
			index,
			this.player.bankCards.length
		);

		this.playerCards = this.player;
	}

	moveHand(previousIndex: number, currentIndex: number) {
		moveItemInArray(this.player.handCards, previousIndex, currentIndex);

		this.playerCards = this.player;
	}

	moveBank(previousIndex: number, currentIndex: number) {
		moveItemInArray(this.player.bankCards, previousIndex, currentIndex);

		this.playerCards = this.player;
	}

	moveTable(id: number) {
		const index = this.player.handCards.findIndex((card: Card) => {
			return card.id === id;
		});

		this.player.sets.push([]);

		transferArrayItem(
			this.player.handCards,
			this.player.sets[this.player.sets.length - 1],
			index,
			0
		);

		this.playerCards = this.player;
	}

	movePile(id: number) {
		const index = this.player.handCards.findIndex((card: Card) => {
			return card.id === id;
		});

		const pileCard = this.player.handCards.splice(index, 1);

		this.deckService.putCardInPile(pileCard[0]);

		this.playerCards = this.player;
	}

	deleteEmptySets() {
		this.player.sets = this.player.sets.filter((set: Card[]) => {
			return set.length > 0;
		});

		this.playerCards = this.player;
	}
}
