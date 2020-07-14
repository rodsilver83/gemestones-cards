export class ConnData {
	public peer = '';
	public type: ConnDataType;
	public data: any;
	public player = '';
}

export enum ConnDataType {
	MSG = 'MSG',
	DEAL = 'DEAL',
	MOVE = 'MOVE',
	DISCARD = 'DISCARD',
	DRAW = 'DRAW',
	INFO = 'INFO',
	HANDSHAKE = 'HANDSHAKE',
	STAUS = 'STATUS',
	START = 'START',
	ERROR = 'ERROR',
	TURN = 'TURN',
}
