import { Card } from './card';

export class Player {
	public handCards: Card[] = [];
	public bankCards: Card[] = [];
	public playCards: Card[] = [];
	public name: string;

	constructor(
		...args: {
			handCards?: Card[];
			bankCards?: Card[];
			playCards?: Card[];
			name: string;
		}[]
	) {
		Object.assign(this, ...args);
	}
}
