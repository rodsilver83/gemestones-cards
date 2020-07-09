import { Card } from './card';

export class Player {
	public handCards: Card[] = [];
	public bankCards: Card[] = [];
	public playCards: Card[] = [];
	public sets: Card[][] = [];
	public name: string;

	constructor(
		...args: {
			handCards?: Card[];
			bankCards?: Card[];
			playCards?: Card[];
			sets?: Card[][];
			name: string;
		}[]
	) {
		Object.assign(this, ...args);
	}
}
