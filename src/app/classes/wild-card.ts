import { Card, CardType } from './card';

export class WildCard extends Card {
	public title = '';
	public type = CardType.WILDCARD;

	constructor(
		...args: { value: number; desc: string; bgColor: string; title: string }[]
	) {
		super(...args);
		Object.assign(this, ...args);
	}
}
