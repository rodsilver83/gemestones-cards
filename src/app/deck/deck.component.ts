import { Component, OnInit } from '@angular/core';
import { Card } from '../card/card.component';
import { ActionCard } from '../action-card/action-card.component';
import { Deck } from './deck.json';
import { PropertyCard } from '../property-card/property-card.component';
import { WildCard } from '../wild-card/wild-card.component';
import { MoneyCard } from '../money-card/money-card.component';
import { RentCard } from '../rent-card/rent-card.component';
import { PropertyWildCard } from '../property-wild-card/property-wild-card.component';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss']
})
export class DeckComponent implements OnInit {

  public deckCards = Array<Card>();

  constructor() { }

  ngOnInit() {
    this.initActionCards();
  }

  initActionCards() {
    console.log(Deck.length);
    Deck.forEach((item) => {
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

}
