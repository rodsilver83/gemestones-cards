import {
	GemstoneWildCard,
	GemstoneWildOrientation,
} from './../classes/gemstone-wild-card';
import { CardType, CardPlace } from './../classes/card';
import { DeckService } from './deck.service';
import { Card } from '../classes/card';
import { BehaviorSubject, Subject } from 'rxjs';
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
	public readonly moveCards$: Subject<Player> = new Subject();
	public readonly discarCard$: Subject<Card> = new Subject();
	public readonly sets$: BehaviorSubject<Card[][]> = new BehaviorSubject([]);

	set playerCards(player: Player) {
		this.player = player;
		this.player.handCards.forEach((card: Card) => {
			card.place = CardPlace.HAND;
		});
		this.player.bankCards.forEach((card: Card) => {
			card.place = CardPlace.BANK;
		});
		this.player.sets.forEach((set: Card[]) => {
			set.forEach((card: Card) => {
				card.place = CardPlace.SETS;
			});
		});

		// We need to refactor this not every subject needs to be triggered.
		this.bankCards$.next(player.bankCards);
		this.handCards$.next(player.handCards);
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
		let setCard = this.findCardSet(card);

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

		this.deleteEmptySets();

		this.playerCards = this.player;
	}

	// Returns the set index that matches the card set
	private findCardSet(card: Card): number {
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
					if (set[0].id !== card.id) {
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
					}
					return false;
				});
				break;
			case CardType.WILDCARD:
				setCard = 0;
				break;
		}
		return setCard;
	}

	// JSON stringify looses functions, getters and setters in the prototype,
	// when we use conn.send from peer.js
	// so to detect the set we use the orientation here.
	private gemstoneWildActiveSet(card: GemstoneWildCard): number {
		if (card.orientation === GemstoneWildOrientation.UP) {
			return card.propertyA.set;
		} else {
			return card.propertyB.set;
		}
	}

	// A wild card is in a set, and changes it value;
	wildCardChangeSet(card: Card) {
		// Find the card, and its set
		let setIndex = -1,
			cardIndex = -1;
		setIndex = this.player.sets.findIndex((set: Card[]) => {
			cardIndex = set.findIndex((c: Card) => {
				return c.id === card.id;
			});
			if (cardIndex !== -1) {
				return true;
			}
		});

		let cardNewSet = this.findCardSet(card);

		if (cardNewSet === -1 || this.player.sets.length === 0) {
			this.player.sets.push([]);
			cardNewSet = this.player.sets.length - 1;
		}

		transferArrayItem(
			this.player.sets[setIndex],
			this.player.sets[cardNewSet],
			cardIndex,
			this.player.sets[cardNewSet].length
		);

		this.deleteEmptySets();

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

	discardCard(card: Card) {
		if (card.place === CardPlace.HAND) {
			this.player.handCards = this.player.handCards.filter((c: Card) => {
				return c.id !== card.id;
			});
		}

		if (card.place === CardPlace.SETS) {
			this.player.sets = this.player.sets.filter((set: Card[]) => {
				return set.filter((c: Card) => {
					return c.id !== card.id;
				});
			});
		}
		card.place = CardPlace.DISCARD;
		this.discarCard$.next(card);
		this.playerCards = this.player;
	}

	addTurnDrawCards(cards: Card[]) {
		this.player.handCards = this.player.handCards.concat(cards);
		this.playerCards = this.player;
	}
}
