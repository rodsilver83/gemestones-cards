import { Component, OnInit } from '@angular/core';
import { Card } from '../card/card.component';
import { ActionCard } from '../action-card/action-card.component';
import { Deck } from './deck.json';
import { PropertyCard } from '../property-card/property-card.component';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss']
})
export class DeckComponent implements OnInit {

  private deckCards = Array<Card>();

  constructor() { }

  ngOnInit() {
    this.initActionCards();
  }

  initActionCards() {
    Deck.forEach((item) => {
      for (let i = 0; i < item.quantity; i++) {
        switch (item.type) {
          case 'ACTION':
            this.deckCards.push(new ActionCard(item.config));
            break;
          case 'PROPERTY':
            this.deckCards.push(new PropertyCard(item.config as any));
            break;
        }
      }
    });
  }

}
