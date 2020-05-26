import { Card } from './card';
import { Rent } from './rent';

export class PropertyWild {
	public name = '';
	public color = '';
	public set = 0;
	public textColor = '';
	public rents = Array<Rent>();
}

export class PropertyWildCard extends Card {
	public propertyA: PropertyWild;
	public propertyB: PropertyWild;
	public type = 'PROPERTYWILD';

	constructor(...args: {
		value: number;
		bgColor: string;
		desc: string,
		propertyA: PropertyWild,
		propertyB: PropertyWild
	}[]) {
		super(...args);
		Object.assign(this, ...args);
	}

}
