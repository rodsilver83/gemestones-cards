import { Card, CardType } from './card';
import { Rent } from './rent';

export class GemstoneCard extends Card {
	public name = '';
	public color = '';
	public textColor = '';
	public rents = Array<Rent>();
	public type = CardType.GEMSTONE;

	constructor(
		...args: {
			color: string;
			bgColor: string;
			value: number;
			icon?: string;
			set?: number;
			iconColor?: string;
			name: string;
			textColor?: string;
			desc: string;
			rents: Array<Rent>;
		}[]
	) {
		super(...args);
		Object.assign(this, ...args);
	}
}
