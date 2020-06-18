export class Card {
	public value = 0;
	public bgColor = '#ffffff';
	public desc = '';
	public type: CardType = CardType.CARD;

	constructor(...args: { value: number; bgColor: string; desc: string }[]) {
		Object.assign(this, ...args);
	}
}

export enum CardType {
	PROPERTY = 'PROPERTY',
	CARD = 'CARD',
	ACTION = 'ACTION',
	WILDCARD = 'WILDCARD',
	MONEY = 'MONEY',
	RENT = 'RENT',
	PROPERTYWILD = 'PROPERTYWILD',
}
