import { CardType } from './../classes/card';
import { Injectable, OnInit } from '@angular/core';
import {
	HttpClient,
	HttpHeaders,
	HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError, Observer, Subject } from 'rxjs';
import { catchError, map, take } from 'rxjs/operators';
import { Card } from '../classes/card';
import { ActionCard } from '../classes/action-card';
import { PropertyCard } from '../classes/property-card';
import { WildCard } from '../classes/wild-card';
import { MoneyCard } from '../money-card/money-card.component';
import { RentCard } from '../classes/rent-card';
import { PropertyWildCard } from '../classes/property-wild-card';
import * as DECK from '../../assets/deck.json';

@Injectable({
	providedIn: 'root',
})
export class DeckService {
	private jsonURL = 'https://monopolycards-20516.firebaseio.com/Deck.json';
	private deckCards: Card[] = [];
	public deckCards$: Subject<boolean>;
	public drawCards$: Subject<Card[]>;

	private useLocalDeckJson = true;

	constructor(private http: HttpClient) {
		this.deckCards$ = new Subject<boolean>();
		this.drawCards$ = new Subject<Card[]>();
	}

	getDeck() {
		if (this.useLocalDeckJson) {
			this.initDeck(DECK.Deck);
			this.suffleDeck();
			this.deckCards$.next(true);
		}
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
					case CardType.PROPERTY: {
						const card = new PropertyCard(item.config as PropertyCard);
						card.desc = `Cada carta muestra cuántas ropiedades necesitas de ese color para completar un GRUPO	COMPLETO.`;
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
					case CardType.PROPERTYWILD: {
						const card = new PropertyWildCard(item.config as PropertyWildCard);
						card.desc = `Cada carta muestra cuántas ropiedades necesitas de ese color para completar un GRUPO	COMPLETO.`;
						this.deckCards.push(new PropertyWildCard(card));
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

	// draw(count: number): Subject<Card[]> {
	// 	this.deckCards$.pipe(take(1)).subscribe(() => {
	// 		const cards = this.drawFromDeck(count);
	// 		if (cards) {
	// 			console.log('*DeckDraw:', cards);
	// 			this.drawCards$.next(cards);
	// 		} else {
	// 			this.drawCards$.error('Not enough cards');
	// 		}
	// 	});
	// 	this.getDeck();
	// 	return this.drawCards$;
	// }

	drawFromDeck(count: number): Card[] {
		if (this.deckCards.length < count) {
			return null;
		}
		const draw: Card[] = [];
		for (let i = 0; i < count; i++) {
			draw.push(this.deckCards.shift());
		}
		return draw;
	}
}
