import { Component, OnInit, Input } from '@angular/core';

export class Card {
  public value = 0;
  public bgColor = '';

  constructor(...args: { value: number, bgColor: string }[]) {
    Object.assign(this, ...args);
  }
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() public value: number;
  @Input() public color: string;

  constructor() { }

  ngOnInit() {
  }

}
