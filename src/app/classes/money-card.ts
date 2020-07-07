import { CardType, Card } from './card';

export class MoneyCard extends Card {
	public type = CardType.MONEY;
	constructor(...args: { value: number; bgColor: string; desc: string }[]) {
		super(...args);
	}
}
