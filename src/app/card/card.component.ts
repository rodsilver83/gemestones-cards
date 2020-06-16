import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../classes/card';

@Component({
	selector: 'mc-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
	@Input() public config: Card;
	@Input() public valueRotate = false;

	public showInfo = false;

	constructor() {}

	ngOnInit() {}

	toggleInfo() {
		this.showInfo = !this.showInfo;
	}
}
