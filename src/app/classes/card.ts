export class Card {
	public value = 0;
	public bgColor = '#ffffff';
	public desc = '';
	public type = 'CARD';

	constructor(...args: { value: number; bgColor: string; desc: string }[]) {
		Object.assign(this, ...args);
	}
}
