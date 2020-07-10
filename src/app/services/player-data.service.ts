import {
	GemstoneWildCard,
	GemstoneWildOrientation,
} from './../classes/gemstone-wild-card';
import { CardType, CardPlace } from './../classes/card';
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
	public readonly sets$: BehaviorSubject<Card[][]> = new BehaviorSubject([]);

	set playerCards(player: Player) {
		this.player = player;
		this.player.handCards.forEach((card: Card) => {
			card.place = CardPlace.HAND;
		});
		this.handCards$.next(player.handCards);
		this.player.bankCards.forEach((card: Card) => {
			card.place = CardPlace.BANK;
		});
		this.bankCards$.next(player.bankCards);
		this.player.sets.forEach((set: Card[]) => {
			set.forEach((card: Card) => {
				card.place = CardPlace.SETS;
			});
		});
		this.sets$.next(player.sets);
	}

	get playerName(): string {
		return this.player?.name;
	}

	set localPlayer(player: Player) {
		this.player = player;
	}

	get localPlayer(): Player {
		return this.player;
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
		const card = this.player.handCards[index];
		let setCard = 0;
		switch (card.type) {
			case CardType.GEMSTONE:
				setCard = this.player.sets.findIndex((set: Card[]) => {
					if (set[0].type === CardType.GEMSTONE) {
						return card.set === set[0].set;
					}
					if (set[0].type === CardType.GEMSTONEWILD) {
						return (
							this.gemstoneWildActiveSet(set[0] as GemstoneWildCard) ===
							card.set
						);
					}
				});
				break;
			case CardType.GEMSTONEWILD:
				setCard = this.player.sets.findIndex((set: Card[]) => {
					if (set[0].type === CardType.GEMSTONE) {
						return (
							this.gemstoneWildActiveSet(card as GemstoneWildCard) ===
							set[0].set
						);
					}
					if (set[0].type === CardType.GEMSTONEWILD) {
						return (
							this.gemstoneWildActiveSet(set[0] as GemstoneWildCard) ===
							this.gemstoneWildActiveSet(card as GemstoneWildCard)
						);
					}
				});
				break;
			case CardType.WILDCARD:
				setCard = 0;
				break;
		}

		if (setCard === -1 || this.player.sets.length === 0) {
			this.player.sets.push([]);
			setCard = this.player.sets.length - 1;
		}

		transferArrayItem(
			this.player.handCards,
			this.player.sets[setCard],
			index,
			this.player.sets[setCard].length
		);

		this.playerCards = this.player;
	}

	// JSON stringify looses functions and gettets in the prototype,
	// when we use conn.send from perr.js
	gemstoneWildActiveSet(card: GemstoneWildCard): number {
		if (card.orientation === GemstoneWildOrientation.UP) {
			return card.propertyA.set;
		} else {
			return card.propertyA.set;
		}
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
