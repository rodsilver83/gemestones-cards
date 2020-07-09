import { GamePlayersService } from './../../services/game-players.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'mc-players-list',
	templateUrl: './players-list.component.html',
	styleUrls: ['./players-list.component.scss'],
})
export class PlayersListComponent implements OnInit {
	constructor(public gamePlayersService: GamePlayersService) {}

	ngOnInit(): void {}
}
