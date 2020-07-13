import { Routes, RouterModule } from '@angular/router';
import { LobbyComponent } from './components/lobby/lobby.component';
import { HostComponent } from './components/host/host.component';
import { RoomPlayerComponent } from './components/room-player/room-player.component';
import { NgModule } from '@angular/core';
import { RulesComponent } from './rules/rules.component';

const routes: Routes = [
	{
		path: 'lobby',
		component: LobbyComponent,
	},
	{
		path: 'host',
		component: HostComponent,
	},
	{
		path: 'player',
		component: RoomPlayerComponent,
	},
	{
		path: 'rules',
		component: RulesComponent,
	},
	{
		path: '**',
		component: LobbyComponent,
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			anchorScrolling: 'enabled',
			scrollOffset: [0, 100],
		}),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
