import { Component, OnInit, Input } from '@angular/core';
import { DeckService } from '../services/deck.service';
import { Card } from '../classes/card';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss']
})
export class DeckComponent implements OnInit {

  @Input() public cards: Card[];

  constructor(private deckService: DeckService) { }

  ngOnInit() {
    // if (!this.cards) {
    //   this.deckService.draw(5).subscribe((deck: Card[]) => {
    //     this.cards = deck;
    //   });
    // }
  }
}
