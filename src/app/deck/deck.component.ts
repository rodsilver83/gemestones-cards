import { Component, OnInit } from '@angular/core';
import { Card } from '../card/card.component';
import { ActionCard } from '../action-card/action-card.component';
// import { Deck } from '../../deck.json';
import { PropertyCard } from '../property-card/property-card.component';
import { WildCard } from '../wild-card/wild-card.component';
import { MoneyCard } from '../money-card/money-card.component';
import { RentCard } from '../rent-card/rent-card.component';
import { PropertyWildCard } from '../property-wild-card/property-wild-card.component';
import { Observable, Observer } from 'rxjs';
import { DeckService } from '../services/deck.service';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss']
})
export class DeckComponent implements OnInit {

  public deckCards$: Observable<Card[]>;

  constructor(private deckService: DeckService) { }

  ngOnInit() {
    this.deckCards$ = new Observable<Card[]>((observer: Observer<Card[]>) => {
      this.deckService.draw(4).subscribe((deck: Card[]) => {
        observer.next(deck);
      },
        err => {
          console.log(err);
        });
    });
  }
}
