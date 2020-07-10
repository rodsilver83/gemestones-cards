import { Card, CardType } from './card';
import { Rent } from './rent';

export enum GemstoneWildOrientation {
	UP = 'UP',
	DOWN = 'DOWN',
}

export class GemstoneWild {
	public name = '';
	public color = '';
	public set = 0;
	public textColor = '';
	public rents = Array<Rent>();
}

export class GemstoneWildCard extends Card {
	public readonly propertyA: GemstoneWild;
	public readonly propertyB: GemstoneWild;
	public type = CardType.GEMSTONEWILD;
	public orientation: GemstoneWildOrientation;

	constructor(
		...args: {
			value: number;
			bgColor: string;
			desc: string;
			propertyA: GemstoneWild;
			propertyB: GemstoneWild;
		}[]
	) {
		super(...args);
		Object.assign(this, ...args);
		this.orientation = GemstoneWildOrientation.UP;
	}
}
