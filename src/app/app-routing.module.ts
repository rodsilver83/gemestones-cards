import { Routes, RouterModule } from '@angular/router';
import { LobbyComponent } from './components/lobby/lobby.component';
import { HostComponent } from './components/host/host.component';
import { RoomPlayerComponent } from './components/room-player/room-player.component';
import { NgModule } from '@angular/core';

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
		path: '**',
		component: LobbyComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
