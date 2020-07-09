export class ConnData {
	public peer = '';
	public type: ConnDataType;
	public data: any;
	public player = '';
}

export enum ConnDataType {
	MSG,
	DEAL,
	MOVE,
	DRAW,
	INFO,
	HANDSHAKE,
	STAUS,
	START,
	ERROR,
}
