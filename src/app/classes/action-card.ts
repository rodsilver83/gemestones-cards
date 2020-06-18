import { Card, CardType } from './card';

export class ActionCard extends Card {
	public title = '';
	public icon = '';
	public iconColor = '';
	public small = false;
	public type = CardType.ACTION;

	constructor(
		...args: {
			bgColor: string;
			value: number;
			desc: string;
			icon?: string;
			iconColor?: string;
			title?: string;
			small?: boolean;
		}[]
	) {
		super(...args);
		Object.assign(this, ...args);
	}
}
