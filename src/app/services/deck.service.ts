import { MoneyCard } from './../classes/money-card';
import { CardType } from './../classes/card';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Subject, BehaviorSubject } from 'rxjs';
import { catchError, map, take } from 'rxjs/operators';
import { Card } from '../classes/card';
import { ActionCard } from '../classes/action-card';
import { GemstoneCard } from '../classes/gemstone-card';
import { WildCard } from '../classes/wild-card';
import { RentCard } from '../classes/rent-card';
import { GemstoneWildCard } from '../classes/gemstone-wild-card';
import * as DECK from '../../assets/deck.json';

@Injectable({
	providedIn: 'root',
})
export class DeckService {
	private jsonURL = '';
	private deckCards: Card[] = [];
	private pileCards: Card[] = [];
	private discardCards: Card[] = [];
	public deckCards$: Subject<boolean>;
	public drawCards$: Subject<Card[]>;
	public discardCards$: Subject<Card[]>;
	public pileTopCard$: BehaviorSubject<Card>;

	private useLocalDeckJson = true;

	constructor(private http: HttpClient) {
		this.deckCards$ = new Subject<boolean>();
		this.drawCards$ = new Subject<Card[]>();
		this.pileTopCard$ = new BehaviorSubject<Card>(null);
		this.discardCards$ = new Subject<Card[]>();
	}

	getDeck() {
		// We are loading localy always, until we add a json firebase service
		if (this.useLocalDeckJson || true) {
			this.initDeck(DECK.Deck);
			this.suffleDeck();
			this.deckCards$.next(true);
		}

		// To load deck from firebase service
		if (this.deckCards.length === 0) {
			this.http
				.get<any>(this.jsonURL)
				.pipe(
					take(1),
					map((res: any) => {
						this.initDeck(res);
						this.suffleDeck();
						return this.deckCards;
					}),
					catchError(this.handleError)
				)
				.subscribe((cards: Card[]) => {
					this.deckCards$.next(true);
				});
		} else {
			this.deckCards$.next(true);
		}
	}

	private initDeck(deck: any) {
		deck.forEach((item) => {
			for (let i = 0; i < item.quantity; i++) {
				switch (item.type) {
					case CardType.ACTION:
						this.deckCards.push(new ActionCard(item.config as ActionCard));
						break;
					case CardType.GEMSTONE: {
						const card = new GemstoneCard(item.config as GemstoneCard);
						this.deckCards.push(card);
						break;
					}
					case CardType.WILDCARD:
						this.deckCards.push(new WildCard(item.config as WildCard));
						break;
					case CardType.MONEY:
						this.deckCards.push(new MoneyCard(item.config as MoneyCard));
						break;
					case CardType.RENT:
						this.deckCards.push(new RentCard(item.config as RentCard));
						break;
					case CardType.GEMSTONEWILD: {
						const card = new GemstoneWildCard(item.config as GemstoneWildCard);
						this.deckCards.push(new GemstoneWildCard(card));
						break;
					}
				}
			}
		});
	}

	private suffleDeck() {
		for (let i = 0; i < this.deckCards.length; i++) {
			const rand = Math.ceil(Math.random() * (this.deckCards.length - 1));
			const temp = this.deckCards[i];
			this.deckCards[i] = this.deckCards[rand];
			this.deckCards[rand] = temp;
		}
	}

	private handleError(error: HttpErrorResponse) {
		if (error.error instanceof ErrorEvent) {
			// A client-side or network error occurred. Handle it accordingly.
			console.log('An error occurred:', error.error.message);
		} else {
			// The backend returned an unsuccessful response code. The response body may contain clues as to what went wrong,
			console.error(
				`Backend returned code ${error.status}, ` + `body was: ${error.error}`
			);
		}
		// return an observable with a user-facing error message
		return throwError(error);
	}

	drawFromDeck(count: number): Card[] {
		if (this.deckCards.length < count) {
			this.deckCards.concat(this.pileCards);
			this.pileCards = [];
		}
		if (this.deckCards.length < count) {
			count = this.deckCards.length;
		}
		const draw: Card[] = [];
		for (let i = 0; i < count; i++) {
			draw.push(this.deckCards.shift());
		}
		return draw;
	}

	putCardInPile(card: Card) {
		this.pileCards.push(card);
		this.pileTopCard$.next(card);
	}

	discardCard(card: Card) {
		this.deckCards.push(card);
	}
}
