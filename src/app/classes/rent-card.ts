import { Card, CardType } from './card';

export class RentCard extends Card {
	public rentSet1: number;
	public rentSet2: number;
	public wild: boolean;
	public title: string;
	public type = CardType.RENT;

	constructor(
		...args: {
			value: number;
			bgColor: string;
			desc: string;
			rentSet1?: number;
			rentSet2?: number;
			wild: boolean;
			title: string;
		}[]
	) {
		super(...args);
	}
}
