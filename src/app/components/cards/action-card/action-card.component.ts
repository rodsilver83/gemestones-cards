import { Component, OnInit, Input } from '@angular/core';
import { ActionCard } from '../../../classes/action-card';

@Component({
	selector: 'mc-action-card',
	templateUrl: './action-card.component.html',
	styleUrls: ['./action-card.component.scss'],
})
export class ActionCardComponent implements OnInit {
	@Input() public config: ActionCard;

	constructor() {}

	ngOnInit() {}
}
