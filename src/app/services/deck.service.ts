import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, Observer } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Card } from '../classes/card';
import { ActionCard } from '../classes/action-card';
import { PropertyCard } from '../classes/property-card';
import { WildCard } from '../classes/wild-card';
import { MoneyCard } from '../money-card/money-card.component';
import { RentCard } from '../classes/rent-card';
import { PropertyWildCard } from '../classes/property-wild-card';

@Injectable({
  providedIn: 'root'
})
export class DeckService {

  private jsonURL = 'https://monopolycards-20516.firebaseio.com/Deck.json';
  private deckCards: Card[] = [];
  private deckCards$: Observable<Card[]>;

  constructor(
    private http: HttpClient
  ) { }

  private getDeck(): Observable<Card[]> {
    if (this.deckCards.length === 0) {
      this.deckCards$ = this.http.get<any>(this.jsonURL)
        .pipe(
          map((res: any) => {
            this.initDeck(res);
            return this.suffleDeck(this.deckCards);
          }),
          catchError(this.handleError));
      return this.deckCards$;
    } else {
      return this.deckCards$;
    }
  }

  private initDeck(deck: any) {
    deck.forEach((item) => {
      for (let i = 0; i < item.quantity; i++) {
        switch (item.type) {
          case 'ACTION':
            this.deckCards.push(new ActionCard(item.config as ActionCard));
            break;
          case 'PROPERTY':
            this.deckCards.push(new PropertyCard(item.config as PropertyCard));
            break;
          case 'WILDCARD':
            this.deckCards.push(new WildCard(item.config as WildCard));
            break;
          case 'MONEY':
            this.deckCards.push(new MoneyCard(item.config as MoneyCard));
            break;
          case 'RENT':
            this.deckCards.push(new RentCard(item.config as RentCard));
            break;
          case 'PROPERTYWILD':
            this.deckCards.push(new PropertyWildCard(item.config as PropertyWildCard));
            break;
        }
      }
    });
  }

  private suffleDeck(deck: Card[]) {
    for (let i = 0; i < deck.length; i++) {
      const rand = Math.ceil(Math.random() * deck.length);
      const temp = deck[i];
      deck[i] = deck[rand];
      deck[rand] = temp;
    }
    return deck;
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

  draw(count: number): Observable<Card[]> {
    return new Observable<Card[]>((observer: Observer<Card[]>) => {
      this.getDeck().subscribe(() => {
        const draw = [];
        for (let i = 0; i < count; i++) {
          draw.push(this.deckCards.shift());
        }
        observer.next(draw);

      });
    });
  }
}
