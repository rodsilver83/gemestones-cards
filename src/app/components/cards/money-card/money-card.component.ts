import { MoneyCard } from '../../../classes/money-card';
import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'gs-money-card',
	templateUrl: './money-card.component.html',
	styleUrls: ['./money-card.component.scss'],
})
export class MoneyCardComponent implements OnInit {
	@Input() public config: MoneyCard;

	constructor() {}

	ngOnInit() {}
}
