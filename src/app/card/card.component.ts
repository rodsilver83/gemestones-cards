import { Component, OnInit, Input } from '@angular/core';

export class Card {
  public value = 0;
  public bgColor = '#ffffff';
  public desc = '';

  constructor(...args: { value: number, bgColor: string, desc: string }[]) {
    Object.assign(this, ...args);
  }
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() public config: Card;
  @Input() public valueRotate = false;

  constructor() { }

  ngOnInit() {
  }

}
