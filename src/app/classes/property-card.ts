import { Card } from './card';
import { Rent } from './rent';

export class PropertyCard extends Card {
	public name = '';
	public color = '';
	public textColor = '';
	public set = 0;
	public rents = Array<Rent>();
	public type = 'PROPERTY';

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
