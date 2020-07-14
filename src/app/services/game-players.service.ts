import { Card } from './../classes/card';
import { BehaviorSubject } from 'rxjs';
import { DeckService } from './deck.service';
import { PlayerDataService } from './player-data.service';
import { Player } from './../classes/player';
import { Injectable } from '@angular/core';
import { take, timeout } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class GamePlayersService {
	public status$ = new BehaviorSubject<string>('');
	public deckReady$ = new BehaviorSubject<boolean>(false);
	public otherPlayers$ = new BehaviorSubject<Player[]>([]);
	public move$ = new BehaviorSubject<Player>(null);
	public turn$ = new BehaviorSubject<Player>(null);

	private _otherPlayers = new Map<string, Player>();
	private localPlayer: Player;

	private currentTurnPlayerIndex = 0;

	constructor(
		private playerDataService: PlayerDataService,
		private deckService: DeckService
	) {
		this.deckService.deckCards$
			.pipe(take(1), timeout(5000))
			.subscribe((ready) => {
				this.deckReady$.next(true);
			});
		this.deckService.getDeck();
	}

	private get otherPlayers(): Player[] {
		const players = [];
		this._otherPlayers.forEach((v, k) => {
			players.push(v);
		});
		return players;
	}

	get allPlayers(): Player[] {
		const players = this.otherPlayers;
		players.push(this.localPlayer);
		return players;
	}

	addNewPlayer(newPlayer: Player) {
		if (!this._otherPlayers.has(newPlayer.name)) {
			this._otherPlayers.set(newPlayer.name, newPlayer);
			this.otherPlayers$.next(this.otherPlayers); // Change to Other players, this is for testing
		}
	}

	addNewLocalPlayer(player: Player) {
		this.localPlayer = player;
		this.playerDataService.playerCards = player;
	}

	setLocalPlayerCards(cards: Card[]) {
		this.localPlayer.handCards = cards;
		this.playerDataService.playerCards = this.localPlayer;
	}

	setStatusMessage(msg: string) {
		this.status$.next(msg);
	}

	startNewGame() {
		this.otherPlayers.forEach((player: Player) => {
			this.drawCards(player);
		});
		this.drawCards(this.localPlayer);
		this.playerDataService.playerCards = this.localPlayer;
	}

	updatePlayerCards(player: Player) {
		if (this._otherPlayers.has(player.name)) {
			this._otherPlayers.set(player.name, player);
			this.otherPlayers$.next(this.otherPlayers);
			// this.move$.next(player);
		}
		if (this.localPlayer?.name === player.name) {
			this.localPlayer = player;
			this.playerDataService.playerCards = player;
		}
	}

	drawCards(player: Player) {
		// Values to test
		const cards = this.deckService.drawFromDeck(5);
		player.handCards = cards;
	}

	selectFirstPlayer(): Player {
		this.currentTurnPlayerIndex = Math.floor(
			Math.random() * this.allPlayers.length
		);
		const turnPlayer = this.allPlayers[this.currentTurnPlayerIndex];
		this.turn$.next(turnPlayer);
		return turnPlayer;
	}

	nextTurn() {
		this.currentTurnPlayerIndex =
			++this.currentTurnPlayerIndex > this.allPlayers.length
				? 0
				: this.currentTurnPlayerIndex;
	}
}
