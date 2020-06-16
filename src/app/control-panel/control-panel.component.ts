import { Card } from './../classes/card';
import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'mc-control-panel',
	templateUrl: './control-panel.component.html',
	styleUrls: ['./control-panel.component.scss'],
})
export class ControlPanelComponent implements OnInit {
	@Input() public statusMsg: string;
	@Input() public actionCard: Card;

	constructor() {}

	ngOnInit(): void {}
}
