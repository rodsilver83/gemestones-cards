import { Card, CardType } from './card';
import { Rent } from './rent';

export class GemstoneWild {
	public name = '';
	public color = '';
	public set = 0;
	public textColor = '';
	public rents = Array<Rent>();
}

export class GemstoneWildCard extends Card {
	public propertyA: GemstoneWild;
	public propertyB: GemstoneWild;
	public type = CardType.GEMSTONEWILD;

	private activeGemstone: GemstoneWild;

	get activeGemstoneSet(): number {
		return this.activeGemstone.set;
	}

	get isRotated(): boolean {
		return this.activeGemstone === this.propertyB;
	}

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
		this.activeGemstone = this.propertyA;
	}

	public switchActiveGemstone() {
		this.activeGemstone === this.propertyA
			? (this.activeGemstone = this.propertyB)
			: (this.activeGemstone = this.propertyA);
	}
}
