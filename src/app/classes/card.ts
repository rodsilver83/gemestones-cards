export class Card {
	private static incrementId = 0;
	public readonly id = Card.incrementId++;
	public value = 0;
	public bgColor = '#ffffff';
	public desc = '';
	public set = 0;
	public type: CardType = CardType.CARD;
	public place: CardPlace = CardPlace.DECK;

	constructor(...args: { value: number; bgColor: string; desc: string }[]) {
		Object.assign(this, ...args);
	}
}

export enum CardType {
	GEMSTONE = 'GEMSTONE',
	CARD = 'CARD',
	ACTION = 'ACTION',
	WILDCARD = 'WILDCARD',
	MONEY = 'MONEY',
	RENT = 'RENT',
	GEMSTONEWILD = 'GEMSTONEWILD',
}

export enum CardPlace {
	DECK = 'DECK',
	HAND = 'CARDS',
	SETS = 'SETS',
	BANK = 'BANK',
	PILE = 'PILE',
	DISCARD = 'DISCARD',
}
